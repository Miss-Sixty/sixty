const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  entry: {
    "sixty-desktop": "./docs/site/desktop/main.js",
    "sixty-mobile": "./docs/site/mobile/main",
  },
  //   devServer: {
  //     open: true,
  //     progress: true,
  //     host: "0.0.0.0",
  //     stats: "errors-only",
  //     disableHostCheck: true,
  //   },
  output: {
    path: path.join(__dirname, "../docs/dist"),
    publicPath: "/",
    // chunkFilename: "async_[name].js",
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
      chunks: ["chunks", "sixty-desktop"], //TODO:待查看什么意思
      template: path.join(__dirname, "../docs/site/desktop/index.html"),
      favicon: path.join(__dirname, "../docs/site/common/imgs/favicon.ico"),
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../docs/site/mobile/index.html"),
      filename: "mobile.html",
      favicon: path.join(__dirname, "../docs/site/common/imgs/favicon.ico"),
      title: "Sixty",
      chunks: ["sixty-mobile"], //TODO:待查看什么意思
    }),
  ],
});
