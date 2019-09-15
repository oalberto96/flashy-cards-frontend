/**
 *
 * LoginContainer sagas
 *
 */
import { Auth } from "../../../agent";
import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_LOGIN } from "./constants";
import { requestLoginSucceeded, requestLoginFailed } from "./actions";
import { emptyUsernameError, emptyPasswordError } from "../actions";

const postCredentials = credentials => {
  Auth.configHeaders();
  return Auth.login(credentials)
    .then(response => {
      Auth.configCookies(response.data.credentials);
      Auth.configHeaders();
      return response.data;
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
    const response = yield call(postCredentials, action.payload);
    if (response) {
      yield put(requestLoginSucceeded(response));
      Auth.saveUserData(response.user_data);
    } else {
      yield put(requestLoginFailed());
    }
  }
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}

export default defaultSagas;
