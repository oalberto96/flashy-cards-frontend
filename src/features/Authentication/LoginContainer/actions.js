/**
 *
 * Actions LoginContainer
 *
 */
import { REQUEST_LOGIN } from "./constants";

export const requestLogin = (username, password) => {
  return {
    type: REQUEST_LOGIN,
    payload: {
      username,
      password
    }
  };
};
