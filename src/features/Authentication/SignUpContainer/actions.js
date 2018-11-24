/**
 *
 * SignUpContainer actions
 *
 */

import { REQUEST_SIGNUP, REQUEST_SIGNUP_SUCCEEDED } from "./constants";

export const requestSignUp = (username, password) => {
  return {
    type: REQUEST_SIGNUP,
    payload: {
      username,
      password
    }
  };
};

export const requestSignUpSucceeded = () => {
  return {
    type: REQUEST_SIGNUP_SUCCEEDED
  };
};
