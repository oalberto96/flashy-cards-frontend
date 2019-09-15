import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../../../components/common/TextInput";
import ErrorMessage from "../../../components/common/ErrorMessage";
import style from "./style.module.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="row align-items-center justify-content-center">
        <form className={`${style.loginWrapper} col-lg-4 col-11 col-sm-11`}>
          {this.props.error && <ErrorMessage {...this.props.error} />}
          <h1>Login</h1>

          <div className="form-group">
            <TextInput
              inputClassName="form-control"
              label="Email"
              inputId="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <TextInput
              className="Password"
              inputClassName="form-control"
              label="Password"
              inputId="password"
              inputType="password"
              onChange={this.handleChange}
            />
          </div>
          <button
            id="login-button"
            className="btn btn-primary"
            onClick={e => {
              e.preventDefault();
              this.props.onClick(this.state.username, this.state.password);
            }}
          >
            Login
          </button>
          <Link className="btn btn-outline-info" to="/signup">
            Sign Up
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
