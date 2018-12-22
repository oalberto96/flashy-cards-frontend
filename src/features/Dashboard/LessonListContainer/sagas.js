/**
 *
 * LessonListContainer sagas
 *
 */

import { Lessons } from "../../../agent";
import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_LESSONS, REQUEST_DELETE_LESSON } from "./constants";
import { requestLessonsSucceeded } from "./actions";

const fetchLessons = () => {
  return Lessons.all().then(response => response.data);
};

function* requestLessons(action) {
  const lessons = yield call(fetchLessons, action.payload);
  yield put(requestLessonsSucceeded(lessons));
}

function* requestDeleteLesson(action) {
  yield console.log("DELETE LESSON");
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LESSONS, requestLessons);
  yield takeEvery(REQUEST_DELETE_LESSON, requestDeleteLesson);
}

export default defaultSagas;
