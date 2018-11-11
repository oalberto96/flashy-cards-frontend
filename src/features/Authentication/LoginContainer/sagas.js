/**
 *
 * LoginContainer sagas
 *
 */
import { Auth } from "../../../agent";
import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_LOGIN } from "./constants";
import { requestLoginSucceeded } from "./actions";

const postCredentials = credentials => {
  Auth.login(credentials)
    .then(response => {
      Auth.configCookies(response.data);
      Auth.configHeaders();
    })
    .catch(error => {
      console.log(error);
    });
};

function* requestLogin(action) {
  yield call(postCredentials, action.payload);
  yield put(requestLoginSucceeded());
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}

export default defaultSagas;
