import {
  EMPTY_PASSWORD_ERROR,
  EMPTY_USERNAME_ERROR,
  CLEAR_ERRORS,
  AUTHENTICATE_WITH_LOCAL_COOKIES,
  AUTHENTICATED_WITH_COOKIES,
  LOGOUT
} from "./constants";

export const emptyPasswordError = () => {
  return {
    type: EMPTY_PASSWORD_ERROR
  };
};

export const emptyUsernameError = () => {
  return {
    type: EMPTY_USERNAME_ERROR
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const authenticateWithLocalCookies = () => {
  return { type: AUTHENTICATE_WITH_LOCAL_COOKIES };
};

export const authenticatedWithCookies = payload => {
  return { type: AUTHENTICATED_WITH_COOKIES, payload };
};

export const logout = () => {
  return { type: LOGOUT };
};
