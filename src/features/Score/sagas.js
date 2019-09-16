import { takeEvery, call, put } from "redux-saga/effects";
import * as actionTypes from "./constants";
import { requestLessonScoreSuccess } from "./actions";
import { Lessons } from "../../agent";

const fetchScore = lessonId => {
  return Lessons.getScore(lessonId);
};

function* requestLessonScoreSaga(action) {
  const request = yield call(fetchScore, action.payload);
  yield put(requestLessonScoreSuccess(request.data));
}

export function* defaultSagas() {
  yield takeEvery(actionTypes.REQUEST_LESSON_SCORE, requestLessonScoreSaga);
}

export default defaultSagas;
