import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import serverless from "serverless-http";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";
import App from "../client/App";

const getHTMLString = ({ title, styles, body }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="js/client.js"></script>
    </body>
  </html>
`;

const app = express();

app.use(express.static(`${process.cwd()}/server/dist`));

app.get("*", (req, res) => {
  const context = {};
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

module.exports.handler = serverless(app);
