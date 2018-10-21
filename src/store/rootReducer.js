import { combineReducers } from "redux";
import newLesson from "../features/CreateAndUpdateLesson/LessonFormContainer/reducer";
import lessons from "../features/Dashboard/LessonListContainer/reducer";
import playingLesson from "../features/Play/ConceptListContainer/reducer";

const rootReducer = combineReducers({ newLesson, lessons, playingLesson });

export default rootReducer;
