import * as express from "express";
import ssr from "./ssr";

const app = express();

app.use(express.static(`${process.cwd()}/server/dist`));
app.use("/*", ssr);

app.listen(3000, () => {
  console.log("Application is listening on port 3000!");
});
