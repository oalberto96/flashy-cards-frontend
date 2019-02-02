import { Lessons } from "../../agent";
import { call, put, takeEvery } from "redux-saga/effects";
import * as actionsTypes from "./constants";
import * as actions from "./actions";
import { ApiToLesson } from "../../common/utils/lessons";

/**
 *
 * Training mode sagas
 *
 */

const fetchLesson = lessonId => {
  return Lessons.withConcepts(lessonId).then(response =>
    ApiToLesson(response.data)
  );
};

const saveScore = (lessonId, concepts) => {
  return Lessons.saveTrainingScore(lessonId, concepts).then(
    response => response.data
  );
};

export function* requestLessonToTrainingMode(action) {
  const lesson = yield call(fetchLesson, action.payload.lessonId);
  try {
    yield put(actions.requestLessonToTrainSuccess(lesson));
  } catch (e) {
    console.log(e);
  }
}

export function* saveTrainingScoreSaga(action) {
  yield call(saveScore, action.payload.lessonId, action.payload.concepts);
  yield put(actions.saveTrainingScoreSuccess());
}

export function* defaultSagas() {
  yield takeEvery(
    actionsTypes.REQUEST_LESSON_TO_TRAIN,
    requestLessonToTrainingMode
  );
  yield takeEvery(actionsTypes.SAVE_TRAINING_SCORE, saveTrainingScoreSaga);
}

export default defaultSagas;
