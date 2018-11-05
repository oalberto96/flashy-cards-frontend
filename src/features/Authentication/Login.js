import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/common/TextInput";

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
          className="btn btn-primary"
          onClick={() =>
            this.props.onClick(this.state.username, this.state.password)
          }
        >
          Login
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
