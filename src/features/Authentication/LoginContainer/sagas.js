/**
 *
 * LoginContainer sagas
 *
 */
import { Auth } from "../../../agent";
import { takeEvery } from "redux-saga/effects";
import { REQUEST_LOGIN } from "./constants";

function* requestLogin(action) {
  yield Auth.login(action.payload)
    .then(r => Auth.configCookies(r.data))
    .catch(error => {
      console.log(error);
    });
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LOGIN, requestLogin);
}

export default defaultSagas;
