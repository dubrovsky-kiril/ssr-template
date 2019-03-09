import * as React from "react";
import { Route, Link } from "react-router-dom";
import ProductIdForm from "./components/ProductIdForm";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import LanguageToggler from "./reusableComponents/LanguageToggler/LanguageToggler";

const toggleActiveLangauge = language => () => console.log(language);

const App: React.FunctionComponent = () => (
  <div>
    <LanguageToggler
      activeLanguage="A"
      languages={["A", "B", "C"]}
      toggleActiveLangauge={toggleActiveLangauge}
    />

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">Users</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={ProductIdForm} />
    <Route path="/about" component={() => <div>About page</div>} />
    <Route
      path="/faq"
      component={() => (
        <div>
          <FormattedMessage
            id="faq"
            values={{ numberOfQuestions: <strong>12</strong> }}
          />
          <FormattedHTMLMessage id="faqOthers" />
        </div>
      )}
    />
  </div>
);

export default App;
