import path from "path";
import { DefinePlugin, type Configuration } from "webpack";
import type { EnvVariables } from "./webpack/webpack.types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TypedCssModulesPlugin } from "typed-css-modules-webpack-plugin";
const config = async (env: EnvVariables) => {
  const devServer: DevServerConfiguration = {
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 9000,
  };
  const isDev = env.mode === "development";
  const obj: Configuration = {
    mode: env.mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      clean: true,
      filename: "bundle.js",
    },
    experiments: {
      topLevelAwait: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".pcss"],
      alias: {
        "@assets": path.resolve(__dirname, "src", "assets"),
        "@shared": path.resolve(__dirname, "src", "shared"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@config": path.resolve(__dirname, "src", "shared", "config"),
        "@widgets": path.resolve(__dirname, "src", "widgets"),
        "@images": path.resolve(__dirname, "src", "assets", "images"),
        "@entities": path.resolve(__dirname, "src", "entities"),
        "@features": path.resolve(__dirname, "src", "features"),
      },
    },
    module: {
      rules: [
        {
          test: /\.([cm]?ts|tsx)$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.pcss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  namedExport: true,
                  localIdentName: !isDev
                    ? "[contenthash:10]"
                    : "[name]__[local]_[contenthash:5]",
                },
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                //options: true позволяет работать с иконками напрямую и управлять размерами, а не viewbox
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "convertColors",
                      params: {
                        currentColor: true, //важный параметр, который позволит принимать иконке текущий цвет, это позволяет SVG элементу принимать inline стили в виде цвета или классы или просто color=...
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,

          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env.mode),
      }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/assets/index.html"),
        publicPath: "",
      }),
      new TypedCssModulesPlugin({
        globPattern: path.resolve(__dirname, "src/**/*.module.pcss"),
      }),
    ],
    devtool: isDev ? "source-map" : false,
    devServer,
  };
  return obj;
};

export default config;
