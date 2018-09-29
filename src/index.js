import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Router from "./routes";
import initialState from "./store/initialState";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById("root")
);
