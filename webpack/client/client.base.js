const webpack = require("webpack");

module.exports = {
  entry: {
    app: `${process.cwd()}/src/client/index.tsx`
  },
  plugins: [
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
