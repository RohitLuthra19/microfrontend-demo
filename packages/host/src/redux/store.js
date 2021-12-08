import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducer = (state = { items: [] }, { type, payload }) => {
  switch (type) {
    case "SET_ITEMS":
      return {
        state,
        ...payload,
      };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
