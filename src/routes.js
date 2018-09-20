import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./features/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
