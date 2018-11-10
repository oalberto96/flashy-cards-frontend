/**
 *
 * Actions LoginContainer
 *
 */
import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCEEDED } from "./constants";

export const requestLogin = (username, password) => {
  return {
    type: REQUEST_LOGIN,
    payload: {
      username,
      password
    }
  };
};

export const requestLoginSucceeded = () => {
  return {
    type: REQUEST_LOGIN_SUCCEEDED
  };
};
