/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery, select, put, call } from "redux-saga/effects";
import { Lessons } from "../../../agent";
import {
  REQUEST_LESSON_TO_EDIT,
  REQUEST_UPDATE_LESSON,
  SAVE_NEW_LESSON
} from "./constants";
import {
  requestLessonToEditSuccess,
  requestUpdateLessonSuccess
} from "./actions";
import { requestLessons } from "../../Dashboard/LessonListContainer/actions";

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

function postLesson(lesson) {
  return Lessons.create(lesson).then(response => response.status);
}

function* saveNewLesson(action) {
  const responseStatus = yield call(postLesson, action.payload.lesson);
  if (responseStatus === 200) {
    yield put(requestLessons());
  }
}

export function* defaultSaga() {
  yield takeEvery(REQUEST_LESSON_TO_EDIT, requestLessonToEdit);
  yield takeEvery(REQUEST_UPDATE_LESSON, requestUpdateLesson);
  yield takeEvery(SAVE_NEW_LESSON, saveNewLesson);
}

export default defaultSaga;
