const Html = ({ title, styles, body }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
