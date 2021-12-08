import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const Host = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Host />, document.getElementById("root"));
