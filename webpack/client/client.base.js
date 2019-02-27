const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: `${process.cwd()}/src/client/index.tsx`
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${process.cwd()}/src/client/index.html`,
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      __appMod__: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
