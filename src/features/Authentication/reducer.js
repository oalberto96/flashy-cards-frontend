/**
 *
 * Authentication reducer
 *
 */

import {
  REQUEST_LOGIN_SUCCEEDED,
  REQUEST_LOGIN_FAILED
} from "./LoginContainer/constants";
import {
  REQUEST_SIGNUP_SUCCEEDED,
  REQUEST_SIGNUP_FAILED,
  DIFFERENT_PASSWORD_ERROR
} from "./SignUpContainer/constants";
import { EMPTY_USERNAME_ERROR, EMPTY_PASSWORD_ERROR } from "./constants";

const initialiState = {
  isAuthenticated: false
};

export default function LoginContainerReducer(state = initialiState, action) {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCEEDED:
      window.location.reload();
      return { ...state, isAuthenticated: true };
    case REQUEST_LOGIN_FAILED:
      return {
        ...state,
        error: {
          title: "Wrong credentials",
          description: "The username or password are incorrect"
        }
      };
    case REQUEST_SIGNUP_SUCCEEDED:
      return { ...state, isAuthenticated: true };
    case REQUEST_SIGNUP_FAILED:
      return {
        ...state,
        error: {
          title: "Username in use",
          description: "The username already exist"
        }
      };
    case EMPTY_USERNAME_ERROR:
      return {
        ...state,
        error: {
          description: "Username is required"
        }
      };
    case EMPTY_PASSWORD_ERROR:
      return {
        ...state,
        error: {
          description: "Password is required"
        }
      };
    case DIFFERENT_PASSWORD_ERROR:
      return {
        ...state,
        error: {
          description: "Passwords aren't the same"
        }
      };
    default:
      return state;
  }
}
