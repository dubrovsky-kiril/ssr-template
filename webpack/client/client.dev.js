const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const baseConfig = require("./client.base.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval",
  plugins: [
    new HtmlWebPackPlugin({
      template: `${process.cwd()}/webpack/index.dev.html`,
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    publicPath: "/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      }
    ]
  }
});
