/**
 *
 * Authentication reducer
 *
 */

import { REQUEST_LOGIN_SUCCEEDED } from "./LoginContainer/constants";
import { REQUEST_SIGNUP_SUCCEEDED } from "./SignUpContainer/constants";

const initialiState = {
  isAuthenticated: false
};

export default function LoginContainerReducer(state = initialiState, action) {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCEEDED:
      return { ...state, isAuthenticated: true };
    default:
      return state;
    case REQUEST_SIGNUP_SUCCEEDED:
      return { ...state, isAuthenticated: true };
  }
}
