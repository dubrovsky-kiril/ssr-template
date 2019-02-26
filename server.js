const webpack = require("webpack");
const express = require("express");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const path = require("path");
const webpackDevConfig = require("./webpack/client.dev.js");

const SERVER = express();
const COMPLIED_WEBPACK_CONFIG = webpack(webpackDevConfig);
const PORT = 8000;
const INDEX_HTML_PATH = path.join(
  COMPLIED_WEBPACK_CONFIG.outputPath,
  "index.html"
);

SERVER.use(
  devMiddleware(COMPLIED_WEBPACK_CONFIG, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
      colors: true
    }
  })
);

SERVER.use(hotMiddleware(COMPLIED_WEBPACK_CONFIG));

SERVER.get("*", (_, res) => {
  COMPLIED_WEBPACK_CONFIG.outputFileSystem.readFile(
    INDEX_HTML_PATH,
    (_, result) => {
      res.set("content-type", "text/html");
      res.send(result);
    }
  );
});

SERVER.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}!`)
);
