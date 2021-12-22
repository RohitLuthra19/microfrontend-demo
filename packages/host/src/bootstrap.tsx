import Routes from "./Routes";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { makeServer } from "./server";

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}

const Host = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<Host />, document.getElementById("root"));
