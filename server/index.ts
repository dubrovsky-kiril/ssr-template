import * as express from "express";
import webpack from "webpack";
import webpackClientProdConfig from "../webpack/client/client.prod";
import ssr from "./ssr";

const SERVER = express();
const PORT = 8000;
const COMPLIED_WEBPACK_CONFIG = webpack(webpackClientProdConfig);

SERVER.use(express.static(`${process.cwd()}/server/dist`));
SERVER.use("*", ssr);

SERVER.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}!`)
);
