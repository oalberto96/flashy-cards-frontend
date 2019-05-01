/**
 *
 * LessonListContainer sagas
 *
 */

import { Lessons } from "../../../agent";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { REQUEST_LESSON } from "./constants";
import * as actions from "./actions";

const fetchLesson = lessonId => {
  return Lessons.get(lessonId).then(response => response.data);
};

export function* requestLessonSaga(action) {
  const lesson = yield call(fetchLesson, action.payload.lessonId);
  yield put(actions.requestLessonSuccess(lesson));
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LESSON, requestLessonSaga);
}

export default defaultSagas;
