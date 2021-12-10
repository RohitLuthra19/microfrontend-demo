import { Provider } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";

//@ts-ignore
import store from "host/store";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
