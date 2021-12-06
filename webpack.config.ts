import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import os from "os";
import path from "path";
const isLocal = process.env.BUILD_ENV === "local";
const DIST_PATH = path.resolve(__dirname, "dist");
const resolve = (dir) => path.resolve(__dirname, dir);

const config = {
  entry: resolve("src/app.tsx"),
  mode: "development",
  output: {
    publicPath: "/",
    path: DIST_PATH,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)?$/,
        include: [/src/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: [
                isLocal && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [/src/, /node_modules/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        include: [/src/, /node_modules/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-sprite-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      template: "./public/index.html",
      title: "",
      cache: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    compress: true,
    client: {
      progress: true,
      overlay: { warnings: false, errors: true },
    },
  },
};
/**
 * @todo
 * -[] ReactRouterConfig
 */

export default config;
