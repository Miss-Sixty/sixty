const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const CSS_LOADERS = ["style-loader", "css-loader", "postcss-loader"];

module.exports = {
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
        use: {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false,//inline-block去掉空格
            },
          },
        },
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
  plugins: [new VueLoaderPlugin(),
  new FriendlyErrorsPlugin({
    clearConsole: false,
    logLevel: 'WARNING',
  }),
  new WebpackBar({
    name: 'Sixty',
    color: '#07c160',
  }),
  new CleanWebpackPlugin()],
};
