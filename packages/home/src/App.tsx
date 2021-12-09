import { Provider } from "react-redux";
import Home from "./components/Home";
import "./App.css";
//@ts-ignore
import store from "host/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
