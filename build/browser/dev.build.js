const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseBuild = require("./base.build.js");

module.exports = merge(baseBuild, {
  entry: {
    app: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "..", "..", "src", "browser", "index")
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
