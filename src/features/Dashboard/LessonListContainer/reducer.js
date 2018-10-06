/**
 *
 * LessonListContainer reducer
 *
 */

import { SAVE_NEW_LESSON } from "../../CreateAndUpdateLesson/LessonFormContainer/constants";

function LessonListContainerReducer(state = [], action) {
  switch (action.type) {
    case SAVE_NEW_LESSON:
      let stateCopy = state.slice();
      let lastLessonId = stateCopy[stateCopy.length - 1].lessonId;
      let newLesson = { ...action.payload.lesson };
      newLesson.lessonId = ++lastLessonId;
      stateCopy.push(newLesson);
      return stateCopy;
    default:
      return state;
  }
}

export default LessonListContainerReducer;
