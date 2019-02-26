const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
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
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "..")
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      APP_MOD: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "[name].[hash].js"
  }
};
