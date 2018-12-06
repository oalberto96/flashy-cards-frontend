import {
  EMPTY_PASSWORD_ERROR,
  EMPTY_USERNAME_ERROR,
  CLEAR_ERRORS
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
