const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const appConfig = require("../appConfig");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      APP_MOD: JSON.stringify(appConfig.APP_MOD)
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' }
    ]
  }
};
