/**
 *
 * LoginContainer sagas
 *
 */
import { Auth } from "../../../agent";
import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_LOGIN } from "./constants";
import {
  requestLoginSucceeded,
  requestLoginFailed,
  emptyUsernameError,
  emptyPasswordError
} from "./actions";

const postCredentials = credentials => {
  return Auth.login(credentials)
    .then(response => {
      Auth.configCookies(response.data);
      Auth.configHeaders();
      return true;
    })
    .catch(error => {
      return false;
    });
};

function* validateInputs({ username, password }) {
  let valid = true;
  if (username === "") {
    yield put(emptyUsernameError());
    valid = false;
  }
  if (password === "") {
    yield put(emptyPasswordError());
    valid = false;
  }
  return valid;
}

function* requestLogin(action) {
  const validInputs = yield call(validateInputs, action.payload);
  if (validInputs) {
    const callSuccess = yield call(postCredentials, action.payload);
    yield callSuccess
      ? put(requestLoginSucceeded())
      : put(requestLoginFailed());
  }
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}

export default defaultSagas;
