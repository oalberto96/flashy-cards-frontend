import { Lessons } from "../../agent";
import { call, put, takeEvery } from "redux-saga/effects";
import * as actionsTypes from "./constants";
import * as actions from "./actions";

/**
 *
 * Training mode sagas
 *
 */

const fetchLesson = lessonId => {
  return Lessons.withConcepts().then(response => response.data);
};

export function* requestLessonToTrainingMode(action) {
  const lesson = yield call(fetchLesson, action.payload.lessonId);
  try {
    yield put(actions.requestLessonToTrainSuccess(lesson));
  } catch (e) {
    console.log(e);
  }
}

export function* defaultSagas() {
  yield takeEvery(
    actionsTypes.REQUEST_LESSON_TO_TRAIN,
    requestLessonToTrainingMode
  );
}

export default defaultSagas;