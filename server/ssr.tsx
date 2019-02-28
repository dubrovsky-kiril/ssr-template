import * as express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";
import getHTML from "./getHTML";
import ProductIdForm from "../client/components/ProductIdForm";

const router = express.Router();

router.get("/", (req, res) => {
  const context = {
    url: undefined
  };

  const title = "Yobushki-vorobushki";
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.originalUrl} context={context}>
        <ProductIdForm />
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
    res.status(200).send(getHTML({ title, styles, body }));
  }
});

export default router;
