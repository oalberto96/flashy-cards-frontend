import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import configureStore from "./store";
import Router from "./routes";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
