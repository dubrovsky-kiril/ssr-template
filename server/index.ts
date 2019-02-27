import express from "express";
import ssr from "./ssr";

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

app.use("/*", ssr);

app.listen(3000, () => {
  console.log("Hello World listening on port 3000!");
});
