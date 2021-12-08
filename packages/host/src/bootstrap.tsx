//import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return <Provider store={store}></Provider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
