const webpack = require("webpack");

module.exports = {
  entry: [`${process.cwd()}/client/index.tsx`],
  plugins: [
    new webpack.DefinePlugin({
      __appMod__: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: "awesome-typescript-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
