const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./client.base.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval",
  plugins: [new webpack.HotModuleReplacementPlugin()],
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
