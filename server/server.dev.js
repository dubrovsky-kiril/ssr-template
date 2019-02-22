const appConfig = require("../appConfig");
const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const path = require("path");
const webpackDevConfig = require("../webpack.config.js")(appConfig.APP_MOD);

const SERVER = express();
const COMPLIED_WEBPACK_CONFIG = webpack(webpackDevConfig);
const PORT = 8000;
const INDEX_HTML_PATH = path.join(
  COMPLIED_WEBPACK_CONFIG.outputPath,
  "index.html"
);

SERVER.use(
  devMiddleware(COMPLIED_WEBPACK_CONFIG, {
    publicPath: webpackDevConfig.output.publicPath
  })
);

SERVER.use(hotMiddleware(COMPLIED_WEBPACK_CONFIG));

SERVER.get("*", (_, res) => {
  // TODO: handle err
  COMPLIED_WEBPACK_CONFIG.outputFileSystem.readFile(
    INDEX_HTML_PATH,
    (err, result) => {
      res.set("content-type", "text/html");
      res.send(result);
    }
  );
});

SERVER.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}!`)
);
