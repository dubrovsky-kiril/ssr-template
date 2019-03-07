import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import * as ru from "react-intl/locale-data/ru";
import * as en from "react-intl/locale-data/ru";
import messages from "./messages";
import { flattenMessages } from "./utils";
import App from "./App";

addLocaleData([...ru, ...en]);

const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  "en-US";

const localeMessages = messages[locale] || messages["en-US"];

const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <IntlProvider locale={locale} messages={flattenMessages(localeMessages)}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </IntlProvider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) module.hot.accept(() => render(App));
