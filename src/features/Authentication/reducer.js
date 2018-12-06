/**
 *
 * Authentication reducer
 *
 */

import { REQUEST_LOGIN_SUCCEEDED } from "./LoginContainer/constants";
import { REQUEST_SIGNUP_SUCCEEDED } from "./SignUpContainer/constants";
import {
  EMPTY_USERNAME_ERROR,
  EMPTY_PASSWORD_ERROR,
  REQUEST_LOGIN_FAILED
} from "./LoginContainer/constants";

const initialiState = {
  isAuthenticated: false
};

export default function LoginContainerReducer(state = initialiState, action) {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCEEDED:
      window.location.reload();
      return { ...state, isAuthenticated: true };
    case REQUEST_SIGNUP_SUCCEEDED:
      return { ...state, isAuthenticated: true };
    case EMPTY_USERNAME_ERROR:
      return {
        ...state,
        loginError: {
          description: "Username is required"
        }
      };
    case EMPTY_PASSWORD_ERROR:
      return {
        ...state,
        loginError: {
          description: "Password is required"
        }
      };
    case REQUEST_LOGIN_FAILED:
      return {
        ...state,
        loginError: {
          title: "Wrong credentials",
          description: "The username or password are incorrect"
        }
      };
    default:
      return state;
  }
}
