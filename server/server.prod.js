const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(compression());
app.use(express.static("dist"));

app.listen(PORT, () => console.log(`Application is running on localhost:${PORT}!`));
