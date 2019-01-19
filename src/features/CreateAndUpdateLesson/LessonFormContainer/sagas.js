/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery, select, put, call, take } from "redux-saga/effects";
import { Lessons } from "../../../agent";
import { lessonToApi, ApiToLesson } from "../../../common/utils/lessons";
import * as constants from "./constants";
import * as actions from "./actions";
import { requestLessons } from "../../Dashboard/LessonListContainer/actions";
import { createObjectUrl } from "../../../common/utils/fileReader";

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

export function* requestLessonToEdit(action) {
  const lesson = yield call(fetchLessonToEdit, action.payload.lessonId);
  yield put(actions.requestLessonToEditSuccess(lesson));
}

export function* requestUpdateLesson() {
  const lesson = yield select(newLessonSelector);
  const response = yield call(updateLesson, lesson);
  if (response) {
    // I called this funtion to notificate in the store
    // basically does nothing
    yield put(actions.requestUpdateLessonSuccess(lesson));
    // update lesson list
    yield put(requestLessons());
  }
}

function postLesson(lesson) {
  return Lessons.create(lessonToApi(lesson)).then(response => response.status);
}

export function* saveNewLesson(action) {
  const responseStatus = yield call(postLesson, action.payload.lesson);
  if (responseStatus === 200) {
    yield put(requestLessons());
  }
}

export function* setCardImage(action) {
  const chan = yield call(createObjectUrl, action.payload.fileImage);
  const localImageUrl = yield take(chan);
  yield put(
    actions.setCardImageSuccess(
      action.payload.conceptId,
      action.payload.card,
      localImageUrl,
      action.payload.cardImage
    )
  );
}

export function* defaultSaga() {
  yield takeEvery(constants.REQUEST_LESSON_TO_EDIT, requestLessonToEdit);
  yield takeEvery(constants.REQUEST_UPDATE_LESSON, requestUpdateLesson);
  yield takeEvery(constants.SAVE_NEW_LESSON, saveNewLesson);
  yield takeEvery(constants.SET_CARD_IMAGE, setCardImage);
}

export default defaultSaga;
