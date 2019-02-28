const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  context: `${process.cwd()}/server`,
  devtool: "source-map",
  entry: [`${process.cwd()}/server/index.ts`],
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
    new CleanWebpackPlugin(["bin"], { root: `${process.cwd()}/server` })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: `${process.cwd()}/server/bin`,
    filename: "./server.js"
  }
};
