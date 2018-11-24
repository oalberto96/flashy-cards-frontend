import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import App from "./App";
import Dashboard from "./features/Dashboard";
import ConceptListContainer from "./features/Play/ConceptListContainer";
import CreateAndUpdateLesson from "./features/CreateAndUpdateLesson";
import LoginContainer from "./features/Authentication/LoginContainer";
import SignUpContainer from "./features/Authentication/SignUpContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Switch>
          <PrivateRoute exact path="/" component={LoginContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/lessons/new" component={CreateAndUpdateLesson} />
          <PrivateRoute
            path="/lessons/:lessonId/edit"
            component={CreateAndUpdateLesson}
          />
          <PrivateRoute
            path="/lessons/:lessonId"
            component={ConceptListContainer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
