const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  entry: {
    app: [path.resolve(__dirname, "..", "src", "index")]
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "..")
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    filename: "[name].[hash].js"
  }
});
