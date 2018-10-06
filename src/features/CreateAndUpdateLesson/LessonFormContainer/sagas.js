/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery, select, put } from "redux-saga/effects";
import { REQUEST_LESSON_TO_EDIT, REQUEST_UPDATE_LESSON } from "./constants";
import {
  requestLessonToEditSuccess,
  requestUpdateLessonSuccess
} from "./actions";

const lessonsSelector = state => {
  return [...state.lessons];
};

const newLessonSelector = state => {
  return {
    ...state.newLesson,
    concepts: state.newLesson.concepts.map(concept => ({ ...concept }))
  };
};

function findLesson(lessons, lessonId) {
  return lessons.find(x => x.lessonId === lessonId);
}

function* requestLessonToEdit(action) {
  const lessons = yield select(lessonsSelector);
  const lesson = yield findLesson(lessons, action.payload.lessonId);
  yield put(requestLessonToEditSuccess(lesson));
}

function* requestUpdateLesson() {
  const lesson = yield select(newLessonSelector);
  if (lesson) {
    yield put(requestUpdateLessonSuccess(lesson));
  }
}

export function* defaultSaga() {
  yield takeEvery(REQUEST_LESSON_TO_EDIT, requestLessonToEdit);
  yield takeEvery(REQUEST_UPDATE_LESSON, requestUpdateLesson);
}

export default defaultSaga;
