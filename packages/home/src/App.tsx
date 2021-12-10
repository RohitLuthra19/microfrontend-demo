import { Provider } from "react-redux";
import "./App.css";
//@ts-ignore
import store from "host/store";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
