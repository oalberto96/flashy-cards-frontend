import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import routes from "./routes";
import initialState from "./store/initialState";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter children={routes} />
  </Provider>,
  document.getElementById("root")
);
