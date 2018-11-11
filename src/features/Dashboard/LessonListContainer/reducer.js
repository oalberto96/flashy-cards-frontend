/**
 *
 * LessonListContainer reducer
 *
 */

import { REQUEST_UPDATE_LESSON_SUCCESS } from "../../CreateAndUpdateLesson/LessonFormContainer/constants";
import { REQUEST_LESSONS_SUCCEEDED } from "./constants";

function LessonListContainerReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_LESSONS_SUCCEEDED:
      return action.payload.lessons;
    case REQUEST_UPDATE_LESSON_SUCCESS:
      return state.map(lesson => {
        if (lesson.lessonId === action.payload.lesson.lessonId) {
          return { ...action.payload.lesson };
        } else {
          return {
            ...lesson,
            concepts: lesson.concepts.map(concept => ({ ...concept }))
          };
        }
      });
    default:
      return state;
  }
}

export default LessonListContainerReducer;
