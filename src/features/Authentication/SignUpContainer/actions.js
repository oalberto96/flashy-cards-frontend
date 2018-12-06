/**
 *
 * SignUpContainer actions
 *
 */

import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCEEDED,
  REQUEST_SIGNUP_FAILED,
  DIFFERENT_PASSWORD_ERROR
} from "./constants";

export const requestSignUp = (username, password, confirmPassword) => {
  return {
    type: REQUEST_SIGNUP,
    payload: {
      username,
      password,
      confirmPassword
    }
  };
};

export const requestSignUpSucceeded = () => {
  return {
    type: REQUEST_SIGNUP_SUCCEEDED
  };
};

export const requestSignUpFailed = () => {
  return {
    type: REQUEST_SIGNUP_FAILED
  };
};

export const differentPasswordError = () => {
  return {
    type: DIFFERENT_PASSWORD_ERROR
  };
};
