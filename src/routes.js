import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
