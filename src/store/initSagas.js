import LessonFormContainerSagas from "../features/CreateAndUpdateLesson/LessonFormContainer/sagas";

let sagas = [LessonFormContainerSagas];

export const initSagas = sagaMiddleware => {
	Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
