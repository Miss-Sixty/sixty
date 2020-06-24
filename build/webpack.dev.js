const { resolve } = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: 'development',
  entry: {
    "sixty-desktop": resolve("docs/site/desktop/main.js"),
    "sixty-mobile": resolve("docs/site/mobile/main"),
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    stats: "errors-only",
    quiet: true
  },
  output: {
    path: resolve("build-docs"),
  },
  optimization: {
    //TODO:待查看什么意思
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: "all",
          minChunks: 2,
          minSize: 0,
          name: "chunks",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["sixty-desktop"], //TODO:待查看什么意思
      template: resolve("docs/site/desktop/index.html"),
      favicon: resolve("docs/site/common/imgs/favicon.ico"),
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: resolve("docs/site/mobile/index.html"),
      filename: "mobile.html",
      favicon: resolve("docs/site/common/imgs/favicon.ico"),
      title: "Sixty",
      chunks: ["sixty-mobile"], //TODO:待查看什么意思
    }),
  ],
});
