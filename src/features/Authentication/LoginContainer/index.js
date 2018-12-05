import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Login";
import { requestLogin } from "./actions";

export class LoginContainer extends React.Component {
  render() {
    return this.props.isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Login {...this.props} />
    );
  }
}
export const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    error: state.authentication.loginError
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (username, password) => dispatch(requestLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
