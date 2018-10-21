import LessonFormContainerSagas from "../features/CreateAndUpdateLesson/LessonFormContainer/sagas";
import ConceptListContainerSagas from "../features/Play/ConceptListContainer/sagas";

let sagas = [LessonFormContainerSagas, ConceptListContainerSagas];

export const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
