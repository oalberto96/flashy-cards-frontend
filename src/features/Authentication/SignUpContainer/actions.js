/**
 *
 * SignUpContainer actions
 *
 */

import { REQUEST_SIGNUP } from "./constants";

export const requestSignUp = (username, password) => {
  return {
    type: REQUEST_SIGNUP,
    payload: {
      username,
      password
    }
  };
};
