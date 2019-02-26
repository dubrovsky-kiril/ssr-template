module.exports = (appMod = "prod") =>
  require(`./build/browser/${appMod}.build.js`);
