import React from "react";
import { connect } from "react-redux";
import Login from "../Login";
import { requestLogin } from "./actions";

export class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (username, password) => dispatch(requestLogin(username, password))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginContainer);
