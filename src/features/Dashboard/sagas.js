/***
 *
 * Dashboard sagas
 *
 */

import { takeEvery } from "redux-saga/effects";
import { REQUEST_DELETE_LESSON } from "./constants";

function* requestDeleteLesson(action) {
  yield console.log("DELETE LESSON");
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_DELETE_LESSON, requestDeleteLesson);
}

export default defaultSagas;
