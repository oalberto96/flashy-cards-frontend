/**
 *
 * SignUpContainer Sagas
 *
 */

import { Auth } from "../../../agent";
import { takeEvery, call, put } from "redux-saga/effects";
import { REQUEST_SIGNUP } from "./constants";
import { requestSignUpSucceeded } from "./actions";

const postNewUserData = userData => {
  return Auth.signUp(userData)
    .then(response => {
      Auth.configCookies(response.data);
      Auth.configHeaders();
      return true;
    })
    .catch(error => {
      console.log("error at register user");
      return false;
    });
};

function* requestSignUp(action) {
  const postSucceeded = yield call(postNewUserData, action.payload);
  if (postSucceeded) {
    yield put(requestSignUpSucceeded());
  }
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_SIGNUP, requestSignUp);
}

export default defaultSagas;
