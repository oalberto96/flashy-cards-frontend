import { combineReducers } from "redux";
import newLesson from "../features/CreateAndUpdateLesson/LessonFormContainer/reducer";
import lessons from "../features/Dashboard/LessonListContainer/reducer";
import playingLesson from "../features/Play/ConceptListContainer/reducer";
import authentication from "../features/Authentication/reducer";

const rootReducer = combineReducers({
  newLesson,
  lessons,
  playingLesson,
  authentication
});

export default rootReducer;
