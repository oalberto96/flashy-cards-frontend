/**
 *
 * LessonListContainer sagas
 *
 */

import { Lessons } from "../../../agent";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { REQUEST_LESSONS, REQUEST_DELETE_LESSON } from "./constants";
import * as actions from "./actions";
import { getLessonIdToDelete } from "./selectors";

const fetchLessons = () => {
  return Lessons.all().then(response => response.data);
};

const deleteLesson = lesson_id => {
  return Lessons.delete(lesson_id).then(response => response.data);
};

export function* requestLessonsSaga(action) {
  const lessons = yield call(fetchLessons);
  yield put(actions.requestLessonsSucceeded(lessons));
}

export function* requestDeleteLesson(action) {
  const lesson_id = yield select(getLessonIdToDelete);
  try {
    yield call(deleteLesson, lesson_id);
    yield put(actions.requestDeleteLessonSuccess());
    yield put(actions.requestLessons());
  } catch (e) {
    yield put(actions.requestDeleteLessonError());
  }
}

export function* defaultSagas() {
  yield takeEvery(REQUEST_LESSONS, requestLessonsSaga);
  yield takeEvery(REQUEST_DELETE_LESSON, requestDeleteLesson);
}

export default defaultSagas;
