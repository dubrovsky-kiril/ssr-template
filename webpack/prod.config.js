const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(["dist"])],
  output: {
    path: `${process.cwd()}/dist`,
    filename: "./js/client.js",
    publicPath: "/"
  }
});
