/**
 *
 * LessonListContainer sagas
 *
 */

import { Lessons } from "../../../agent";
import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_LESSONS } from "./constants";
import { requestLessonsSucceeded } from "./actions";

const fetchLessons = () => {
  return Lessons.all().then(response => response.data);
};

function* requestLessons(action) {
  const lessons = yield call(fetchLessons, action.payload);
  yield put(requestLessonsSucceeded(lessons));
  // yield put(requestLoginSucceeded());
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LESSONS, requestLessons);
}

export default defaultSagas;
