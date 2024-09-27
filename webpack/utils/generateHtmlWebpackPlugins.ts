import { glob } from "glob";
import { dirs } from "../constants/dirs";
import HtmlWebpackPlugin, { type Options } from "html-webpack-plugin";
import path from "path";

export const generateHtmlWebpackPlugins = async (options?: Options) => {
  const pagePaths = await glob(`${dirs.pages}/*.ejs`);
  return pagePaths.map((template) => {
    const { name } = path.parse(template);
    const outputName = `${name}.html`;
    return new HtmlWebpackPlugin({
      filename: outputName,
      template,
      ...options,
    });
  });
};
