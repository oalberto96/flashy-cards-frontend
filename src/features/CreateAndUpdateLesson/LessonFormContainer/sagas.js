/**
 *
 * LessonFormContainer Sagas
 *
 */
import { takeEvery } from "redux-saga/effects";
import { CHANGE_NEW_LESSON_DESCRIPTION } from "./constants";

function* test() {
	console.log("Hello from saga");
}

export function* defaultSaga() {
	yield takeEvery(CHANGE_NEW_LESSON_DESCRIPTION, test);
}

export default defaultSaga;
