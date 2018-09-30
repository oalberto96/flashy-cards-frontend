import { combineReducers } from "redux";
import newLesson from "../features/CreateAndUpdateLesson/LessonFormContainer/reducer";
import lessons from "../features/Dashboard/LessonListContainer/reducer";

const rootReducer = combineReducers({ newLesson, lessons });

export default rootReducer;
