/**
 *
 * PrivateRoute
 *
 */

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "../../../agent";

export const PrivateRoute = props => {
  const componentToRender = <Route {...props} />;
  if (!props.isAuthenticated) {
    if (!Auth.hasCookies) {
      <Redirect to="/login" />;
    } else {
      Auth.configHeaders();
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
