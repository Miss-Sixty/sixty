const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const CSS_LOADERS = ["style-loader", "css-loader", "postcss-loader"];

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".vue", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: CSS_LOADERS,
      },
      {
        test: /\.scss$/,
        use: [...CSS_LOADERS, "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules|docs/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: ["vue-loader", path.resolve("packages/docs-loader")],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
