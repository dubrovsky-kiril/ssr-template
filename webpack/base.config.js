const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./browser/src/index.html",
      filename: "./index.html"
    })
  ]
};