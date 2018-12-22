/**
 *
 * Dashboard reducer
 *
 */

import {
  SET_VISIBLE_DELETE_LESSON_MODAL,
  SET_INVISIBLE_DELETE_LESSON_MODAL
} from "./constants";

const initialState = {
  confirmDeleteLessonModalVisible: false
};

export default function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLE_DELETE_LESSON_MODAL:
      return {
        ...state,
        idLessonToDelete: action.payload.lesson_id,
        confirmDeleteLessonModalVisible: true
      };
    case SET_INVISIBLE_DELETE_LESSON_MODAL:
      return { confirmDeleteLessonModalVisible: false };
    default:
      return state;
  }
}
