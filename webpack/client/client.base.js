const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [`${process.cwd()}/client/index.tsx`],
  plugins: [
    new webpack.DefinePlugin({
      __appMod__: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebPackPlugin({
      template: `${process.cwd()}/webpack/index.dev.html`,
      filename: "index.html"
    })
  ],
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
