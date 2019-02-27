const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  context: path.join(__dirname, "../server"),
  devtool: "source-map",
  entry: ["./index.ts"],
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["bin"], { root: `${process.cwd()}/server` }),
    new webpack.DefinePlugin({
      __appMod__: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "../server/bin"),
    filename: "./server.js"
  }
};
