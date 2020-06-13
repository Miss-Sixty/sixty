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
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
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
      //   {
      //     test: /\.(js|ts|tsx)$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       // enable sub-packages to find babel config
      //       options: {
      //         rootMode: "upward",
      //       },
      //     },
      //   },
      //   {
      //     test: /\.less$/,
      //     sideEffects: true,
      //     use: [
      //       "style-loader",
      //       "css-loader",
      //       "postcss-loader",
      //       {
      //         loader: "less-loader",
      //         options: {
      //           paths: [path.resolve(__dirname, "node_modules")],
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     test: /\.md$/,
      //     use: ["vue-loader", "@vant/markdown-loader"],
      //   },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
