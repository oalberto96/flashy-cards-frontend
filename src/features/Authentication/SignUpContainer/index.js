import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUp from "../SignUp";
import { requestSignUp } from "./actions";

export const SignUpContainer = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? <Redirect to="/dashboard" /> : <SignUp {...props} />;
};

export const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.authentication.error
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (username, password, confirmPassword) =>
      dispatch(requestSignUp(username, password, confirmPassword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
