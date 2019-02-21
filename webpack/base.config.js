const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './browser/src/index.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./browser/src/index.html",
      filename: "./index.html"
    })
  ]
};