/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery, select, put } from "redux-saga/effects";
import { REQUEST_LESSON_TO_EDIT } from "./constants";
import { requestLessonToEditSuccess } from "./actions";

const selector = state => {
	return [...state.lessons];
};

function findLesson(lessons, lessonId) {
	return lessons.find(x => x.lessonId === lessonId);
}

function* test(action) {
	const lessons = yield select(selector);
	const lesson = yield findLesson(lessons, action.payload.lessonId);
	yield put(requestLessonToEditSuccess(lesson));
}

export function* defaultSaga() {
	yield takeEvery(REQUEST_LESSON_TO_EDIT, test);
}

export default defaultSaga;
