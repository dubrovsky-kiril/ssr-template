const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/browser/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      __isProdMod__: JSON.stringify(process.env.NODE_ENV === "prod"),
      __isBrowser__: JSON.stringify(true)
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
