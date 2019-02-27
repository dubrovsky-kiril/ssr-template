const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  context: path.join(__dirname, "../server"),
  devtool: "source-map",
  entry: ["./routes/index.js"],
  mode: "production",
  target: "node",
  output: {
    path: path.join(__dirname, "../server/bin"),
    filename: "./server.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-1"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __appMod__: JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
