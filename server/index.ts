import * as express from "express";
import ssr from "./ssr";

const app = express();

app.set("view engine", "pug");
app.set("views", `${process.cwd()}/server/views`);

app.use(express.static(`${process.cwd()}/server/public`));

app.use("/*", ssr);

app.listen(3000, () => {
  console.log("Hello World listening on port 3000!");
});
