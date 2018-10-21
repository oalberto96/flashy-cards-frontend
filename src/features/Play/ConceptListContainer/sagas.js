/**
 *
 * ConceptListContainer sagas
 *
 */

import { takeEvery, select, put } from "redux-saga/effects";

import { loadLessonToPlaySuccess } from "./actions";
import { LOAD_LESSON_TO_PLAY } from "./constants";
import { lessonsSelector } from "../../../common/selectors/lessons";
import { findLesson } from "../../../common/utils/lessons";

function* loadLessonToPlay(action) {
  const lessons = yield select(lessonsSelector);
  const lesson = yield findLesson(lessons, action.payload.lessonId);
  if (lesson) {
    lesson.index = 0;
    yield put(loadLessonToPlaySuccess(lesson));
  }
}

export default function* defaultSaga() {
  yield takeEvery(LOAD_LESSON_TO_PLAY, loadLessonToPlay);
}
