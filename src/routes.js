import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./features/Dashboard";
import PlayCollectionContainer from "./features/Play/PlayCollectionContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route
          path="/collections/:collectionId"
          component={PlayCollectionContainer}
        />
      </div>
    </BrowserRouter>
  );
};

export default Router;
