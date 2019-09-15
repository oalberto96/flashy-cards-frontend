import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../components/common/TextInput";
import ErrorMessage from "../../../components/common/ErrorMessage";
import style from "./style.module.css";

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
      <div className="row align-items-center justify-content-center">
        <div className={`${style.signUpWrapper} col-lg-4 col-11 col-sm-11`}>
          <h1>Sign Up</h1>
          {this.props.error && <ErrorMessage {...this.props.error} />}
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
              inputClassName="form-control"
              label="Password"
              inputId="password"
              inputType="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <TextInput
              inputClassName="form-control"
              label="Confirm Password"
              inputId="confirmPassword"
              inputType="password"
              onChange={this.handleChange}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.onClick(
                this.state.username,
                this.state.password,
                this.state.confirmPassword
              )
            }
          >
            Sign Up
          </button>
          <div className="pull-right">
            <span className={style.or}>or</span>
            <Link className="btn btn-outline-info" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
