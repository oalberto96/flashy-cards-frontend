import { combineReducers } from "redux";
import newLesson from "../features/CreateAndUpdateLesson/LessonFormContainer/reducer";

const lessons = (state = [], action) => state;
const rootReducer = combineReducers({ newLesson, lessons });

export default rootReducer;
