/**
 *
 * LessonListContainer selectors test
 *
 */
import * as selectors from "../selectors";

describe("LessonListContainer selectors", () => {
  describe("getLessons", () => {
    it("should return lessons", () => {
      const state = {
        lessons: {
          lessons: [{ id: 1 }, { id: 2 }]
        }
      };
      expect(selectors.getLessons(state)).toEqual(state.lessons.lessons);
    });
  });

  describe("deleteModalIsVisible", () => {
    it("should return confirmDeleteLessonModalVisible state", () => {
      const state = {
        lessons: {
          confirmDeleteLessonModalVisible: true,
          lessons: [{ id: 1 }, { id: 2 }]
        }
      };
      expect(selectors.deleteModalIsVisible(state)).toEqual(
        state.lessons.confirmDeleteLessonModalVisible
      );
    });
  });

  describe("getLessonIdToDelete", () => {
    it("should return the lesson to delete", () => {
      const lesson_id = 1;
      const state = {
        lessons: {
          idLessonToDelete: 1
        }
      };
      expect(selectors.getLessonIdToDelete(state)).toEqual(lesson_id);
    });
  });
});
