import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../../components/common/TextInput";
import ErrorMessage from "../../components/common/ErrorMessage";

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
      <div>
        {this.props.error && <ErrorMessage {...this.props.error} />}
        <div className="form-group">
          <h1>Login</h1>
          <TextInput
            inputClass="form-control"
            label="Email"
            inputId="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <TextInput
            className="Password"
            inputClass="form-control"
            label="Password"
            inputId="password"
            inputType="password"
            onChange={this.handleChange}
          />
        </div>
        <button
          id="login-button"
          className="btn btn-primary"
          onClick={() =>
            this.props.onClick(this.state.username, this.state.password)
          }
        >
          Login
        </button>
        <Link className="btn btn-outline-info" to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
