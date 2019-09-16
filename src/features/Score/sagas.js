import { takeEvery, call } from "redux-saga/effects";
import * as actionTypes from "./constants";
import {} from "./actions";
import { Lessons } from "../../agent";

const fetchScore = lessonId => {
  return Lessons.getScore(lessonId);
};

function* requestLessonScoreSaga(action) {
  const score = yield call(fetchScore, action.payload);
}

export function* defaultSagas() {
  yield takeEvery(actionTypes.REQUEST_LESSON_SCORE, requestLessonScoreSaga);
}

export default defaultSagas;
