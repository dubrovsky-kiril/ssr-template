import * as React from "react";
import { Route } from "react-router-dom";
import ProductIdForm from "./components/ProductIdForm";

const App: React.FunctionComponent = () => (
  <div>
    <Route exact path="/" component={ProductIdForm} />
  </div>
);

export default App;
