/**
 *
 * LessonListContainer reducer
 *
 */

import {
  SAVE_NEW_LESSON,
  REQUEST_UPDATE_LESSON_SUCCESS
} from "../../CreateAndUpdateLesson/LessonFormContainer/constants";

function LessonListContainerReducer(state = [], action) {
  switch (action.type) {
    case SAVE_NEW_LESSON:
      let stateCopy = state.slice();
      let lastLessonId = stateCopy[stateCopy.length - 1].lessonId;
      let newLesson = { ...action.payload.lesson };
      newLesson.lessonId = ++lastLessonId;
      stateCopy.push(newLesson);
      return stateCopy;
    case REQUEST_UPDATE_LESSON_SUCCESS:
      return state.map(lesson => {
        debugger;
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
