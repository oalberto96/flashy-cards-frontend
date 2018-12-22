/**
 *
 * LessonListContainer selectors
 *
 */

export const getLessons = state => {
  return state.lessons.lessons;
};

export const deleteModalIsVisible = state => {
  return state.lessons.confirmDeleteLessonModalVisible;
};
