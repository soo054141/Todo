const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PROJECT_ROOT = path.resolve(__dirname);
const BUILD_PATH = path.resolve(PROJECT_ROOT, "build");
const PUBLIC_INDEX = path.resolve(PROJECT_ROOT, "public", "index.html");

module.exports = (webpackEnv) => {
  const mode = webpackEnv.WEBPACK_SERVE ? "development" : "production";
  const isEnvProduction = mode === "production";
  return {
    mode,
    entry: "./src/index.jsx",
    // entry: path.resolve(SRC_PATH, "index.jsx"),
    output: {
      publicPath: "/",
      path: BUILD_PATH,
      filename: isEnvProduction
        ? "js/[name].[contenthash:8].js"
        : "js/bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: "/node_modules/",
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          exclude: "/node_modules/",
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: PUBLIC_INDEX,
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      port: 3001,
      host: "localhost",
      open: true,
      overlay: true,
      stats: "errors-warnings",
      historyApiFallback: true,
    },
  };
};
