const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./client.base.js");

module.exports = merge(baseConfig, {
  entry: {
    app: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "..", "..", "src", "index")
    ]
  },
  mode: "development",
  devtool: "eval",
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    publicPath: "/"
  }
});
