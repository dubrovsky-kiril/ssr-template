const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  output: {
    publicPath: "/"
  }
});
