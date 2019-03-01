import * as express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";
import getHTMLString from "./getHTMLString";
import App from "../client/App";

const router = express.Router();

router.get("/", (req, res) => {
  const context = { url: undefined };
  const sheet = new ServerStyleSheet();

  const title = "Yobushki-vorobushki";
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.status(200).send(getHTMLString({ title, styles, body }));
  }
});

export default router;
