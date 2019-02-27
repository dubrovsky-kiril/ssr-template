const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./client.base.js");

module.exports = merge(baseConfig, {
  entry: {
    app: [path.resolve(__dirname, "..", "..", "src", "index")]
  },
  mode: "development",
  devtool: "eval",
  devServer: {
    hot: true,
    publicPath: "/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
