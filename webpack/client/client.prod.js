const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./client.base.js");

module.exports = merge(baseConfig, {
  context: `${process.cwd()}/client`,
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: `${process.cwd()}/server` })
  ],
  output: {
    path: `${process.cwd()}/server/dist`,
    filename: "./js/client.js",
    publicPath: "/"
  }
});
