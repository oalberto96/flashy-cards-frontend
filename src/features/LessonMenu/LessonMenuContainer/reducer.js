/**
 *
 * LessonListContainer reducer
 *
 */

import * as typeActions from "./constants";

const initialState = {
  lesson: {}
};

function LessonListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case typeActions.REQUEST_LESSON_SUCCESS:
      return { ...state, lesson: { ...action.payload.lesson } };
    default:
      return state;
  }
}

export default LessonListContainerReducer;
