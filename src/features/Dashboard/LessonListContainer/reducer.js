/**
 *
 * LessonListContainer reducer
 *
 */

import {
  REQUEST_LESSONS_SUCCEEDED,
  SET_VISIBLE_DELETE_LESSON_MODAL,
  SET_INVISIBLE_DELETE_LESSON_MODAL,
  REQUEST_DELETE_LESSON_ERROR,
  REQUEST_DELETE_LESSON_SUCCESS
} from "./constants";

const initialState = {
  confirmDeleteLessonModalVisible: false,
  lessons: []
};

function LessonListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LESSONS_SUCCEEDED:
      return { ...state, lessons: action.payload.lessons };
    case SET_VISIBLE_DELETE_LESSON_MODAL:
      return {
        ...state,
        idLessonToDelete: action.payload.lesson_id,
        confirmDeleteLessonModalVisible: true
      };
    case SET_INVISIBLE_DELETE_LESSON_MODAL:
      return { ...state, confirmDeleteLessonModalVisible: false };
    case REQUEST_DELETE_LESSON_SUCCESS:
      return { ...state, confirmDeleteLessonModalVisible: false };
    default:
      return state;
  }
}

export default LessonListContainerReducer;
