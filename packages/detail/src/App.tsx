import { Provider } from "react-redux";
import "./App.css";
//@ts-ignore
import store from "host/store";
import Detail from "./components/Detail";

function App() {
  return (
    <Provider store={store}>
      <Detail />
    </Provider>
  );
}

export default App;
