import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../components/common/TextInput";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <TextInput
          inputClass="form-control"
          label="Email"
          inputId="username"
          onChange={this.handleChange}
        />
        <TextInput
          inputClass="form-control"
          label="Password"
          inputId="password"
          onChange={this.handleChange}
        />
        <TextInput
          inputClass="form-control"
          label="Confirm Password"
          inputId="confirmPassword"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() =>
            this.state.password === this.state.confirmPassword &&
            this.state.username.length > 0 &&
            this.props.onClick(this.state.username, this.state.password)
          }
        >
          Sign Up
        </button>
        <div>
          <Link className="btn btn-outline-info" to="/login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
