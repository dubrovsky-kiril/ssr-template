import * as React from "react";
import * as ReactDOM from "react-dom";
import ProductIdForm from "./components/ProductIdForm";

ReactDOM.render(<ProductIdForm />, document.getElementById("root"));

if (module.hot) module.hot.accept(() => ProductIdForm);
