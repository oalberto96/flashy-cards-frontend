import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./features/Dashboard";
import ConceptListContainer from "./features/Play/ConceptListContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons/:lessonId" component={ConceptListContainer} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
