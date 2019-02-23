import * as React from "react";
import * as ReactDOM from "react-dom";

type AppProps = {
  msg: string
}

const App: React.SFC<AppProps> = ({ msg }) => <div>{msg}</div>

ReactDOM.render(<App msg="Hello tyfdsescript!" />, document.getElementById("root"));