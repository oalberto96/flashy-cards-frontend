/**
 *
 * ConceptListContainer sagas
 *
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { Lessons } from "../../../agent";
import { ApiToLesson } from "../../../common/utils/lessons";
import { loadLessonToPlaySuccess } from "./actions";
import { LOAD_LESSON_TO_PLAY } from "./constants";

function fetchLessonWithConcepts(lessonId) {
  return Lessons.withConcepts(lessonId).then(response =>
    ApiToLesson(response.data)
  );
}

function* loadLessonToPlay(action) {
  const lesson = yield call(fetchLessonWithConcepts, action.payload.lessonId);
  if (lesson) {
    lesson.index = 0;
    yield put(loadLessonToPlaySuccess(lesson));
  }
}

export default function* defaultSaga() {
  yield takeEvery(LOAD_LESSON_TO_PLAY, loadLessonToPlay);
}
