/**
 *
 * PrivateRoute
 *
 */

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Auth } from "../../../agent";
import { authenticatedWithCookies } from "../../../features/Authentication/actions";

export const PrivateRoute = props => {
  const dispatch = useDispatch();
  let componentToRender = <Route {...props} />;
  if (!props.isAuthenticated) {
    if (!Auth.hasCookies()) {
      componentToRender = <Redirect to="/login" />;
    } else {
      Auth.configHeaders();
      dispatch(authenticatedWithCookies());
    }
  }
  return componentToRender;
};

const mapSateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
};

export default connect(
  mapSateToProps,
  null
)(PrivateRoute);
