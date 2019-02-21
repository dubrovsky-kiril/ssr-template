const appConfig = require("../appConfig");
const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const path = require("path");
const webpackConfig = require("../webpack.config.js")(appConfig.APP_MOD);

const app = express();
const compiler = webpack(webpackConfig);
const PORT = 8000;

app.use(
  devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.get("*", (req, res) => res.sendFile(path.join(compiler.outputPath, "index.html")));

app.listen(PORT, () => console.log(`Application is running on localhost:${PORT}!`));
