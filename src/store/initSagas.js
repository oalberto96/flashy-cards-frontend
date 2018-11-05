import LessonFormContainerSagas from "../features/CreateAndUpdateLesson/LessonFormContainer/sagas";
import ConceptListContainerSagas from "../features/Play/ConceptListContainer/sagas";
import LoginContainerSagas from "../features/Authentication/LoginContainer/sagas";

let sagas = [
  LessonFormContainerSagas,
  ConceptListContainerSagas,
  LoginContainerSagas
];

export const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
