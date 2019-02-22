// TODO: "comprssion" add gzip compression
// TODO: "helmet" secure Express apps with various HTTP headers
// TODO: "cors" enable CORS

const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;
const INDEX_HTML_PATH = path.resolve("dist", "index.html");

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const isBundleReq = /app|vendor/g.test(req.url);

  if (!isBundleReq) res.sendFile(INDEX_HTML_PATH);
});

app.listen(PORT, () =>
  console.log(`Application is running on localhost:${PORT}!`)
);
