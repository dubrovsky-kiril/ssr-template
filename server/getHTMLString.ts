type getHTMLStringTypes = {
  title: string;
  styles: string;
  body: string;
};

const getHTMLString = ({ title, styles, body }: getHTMLStringTypes): string => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="js/index.js"></script>
    </body>
  </html>
`;

export default getHTMLString;
