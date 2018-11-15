/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery, select, put, call } from "redux-saga/effects";
import { Lessons } from "../../../agent";
import { lessonToApi, ApiToLesson } from "../../../common/utils/lessons";
import {
  REQUEST_LESSON_TO_EDIT,
  REQUEST_UPDATE_LESSON,
  SAVE_NEW_LESSON
} from "./constants";
import {
  requestUpdateLessonSuccess,
  requestLessonToEditSuccess
} from "./actions";
import { requestLessons } from "../../Dashboard/LessonListContainer/actions";

const newLessonSelector = state => {
  return {
    ...state.newLesson,
    concepts: state.newLesson.concepts.map(concept => ({ ...concept }))
  };
};

function fetchLessonToEdit(lessonId) {
  return Lessons.withConcepts(lessonId).then(response =>
    ApiToLesson(response.data)
  );
}

function updateLesson(lesson) {
  return Lessons.update(lesson.id, lessonToApi(lesson));
}

function* requestLessonToEdit(action) {
  const lesson = yield call(fetchLessonToEdit, action.payload.lessonId);
  yield put(requestLessonToEditSuccess(lesson));
}

function* requestUpdateLesson() {
  const lesson = yield select(newLessonSelector);
  const response = yield call(updateLesson, lesson);
  if (response) {
    // I called this funtion to notificate in the store
    // basically does nothing
    yield put(requestUpdateLessonSuccess(lesson));
    // update lesson list
    yield put(requestLessons());
  }
}

function postLesson(lesson) {
  return Lessons.create(lessonToApi(lesson)).then(response => response.status);
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
