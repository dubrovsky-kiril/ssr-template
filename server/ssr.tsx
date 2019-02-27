import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import ProductIdForm from "../client/components/ProductIdForm";

const router = express.Router();

router.get("/", (req, res) => {
  const context = {};

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
    res.status(200).render("./views/index.pug", {
      html,
      initialState: JSON.stringify(undefined)
    });
  }
});
