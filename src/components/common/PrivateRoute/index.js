/**
 *
 * PrivateRoute
 *
 */

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = props => {
  return props.isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );
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
