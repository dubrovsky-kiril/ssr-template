const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "..", "src", "index")
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
      },
      { test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      APP_MOD: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    publicPath: "/"
  }
};
