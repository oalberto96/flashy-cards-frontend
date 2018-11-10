/**
 *
 * LoginContainer reducer
 *
 */

import { REQUEST_LOGIN_SUCCEEDED } from "./constants";

const initialiState = {
  isAuthenticated: false
};

export default function LoginContainerReducer(state = initialiState, action) {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCEEDED:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}
