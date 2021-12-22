import { Provider } from "react-redux";
import "./App.css";
//@ts-ignore
import store from "host/store";
//@ts-ignore
import Routes from "host/Routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
