import { combineReducers } from "redux";
import newLesson from "../features/CreateAndUpdateLesson/LessonFormContainer/reducer";
import lessons from "../features/Dashboard/LessonListContainer/reducer";
import playingLesson from "../features/Play/ConceptListContainer/reducer";
import authentication from "../features/Authentication/reducer";
import lessonTraining from "../features/TrainingMode/reducer";
import selectedLesson from "../features/LessonMenu/LessonMenuContainer/reducer";

const rootReducer = combineReducers({
  newLesson,
  lessons,
  playingLesson,
  authentication,
  lessonTraining,
  selectedLesson
});

export default rootReducer;
