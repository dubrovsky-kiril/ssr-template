import * as express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import ProductIdForm from "../client/components/ProductIdForm";

const router = express.Router();

router.get("/", (req, res) => {
  const context = {
    url: undefined
  };

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <ProductIdForm />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.status(200).render("index", {
      html,
      initialState: JSON.stringify(undefined)
    });
  }
});

export default router;
