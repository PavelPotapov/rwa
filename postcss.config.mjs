import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import presetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import postcssMixins from "postcss-mixins";

const config = {
  plugins: [
    postcssMixins,
    postcssImport,
    autoprefixer,
    postcssNested,
    presetEnv({
      features: {
        "custom-media-queries": true,
      },
    }),
  ],
};

export default config;
