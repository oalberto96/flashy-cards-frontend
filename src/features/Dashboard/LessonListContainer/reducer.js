/**
 *
 * LessonListContainer reducer
 *
 */

import { REQUEST_LESSONS_SUCCEEDED } from "./constants";

function LessonListContainerReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_LESSONS_SUCCEEDED:
      return action.payload.lessons;
    default:
      return state;
  }
}

export default LessonListContainerReducer;
