/**
 *
 * LessonListContainer reducer tests
 *
 */
import reducer from "../reducer";
import * as actions from "../actions";

describe("LessonListContainer reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      confirmDeleteLessonModalVisible: false,
      lessons: []
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REQUEST_LESSONS_SUCCEEDED", () => {
    const lessons = [{ id: 1 }];
    const expectedState = {
      lessons
    };
    expect(reducer([], actions.requestLessonsSucceeded(lessons))).toEqual(
      expectedState
    );
  });

  it("should handle SET_VISIBLE_DELETE_LESSON_MODAL", () => {
    const lesson_id = 1;
    const state = {
      confirmDeleteLessonModalVisible: false
    };
    const expectedState = {
      idLessonToDelete: lesson_id,
      confirmDeleteLessonModalVisible: true
    };
    expect(
      reducer(state, actions.setVisibleDeleteLessonModal(lesson_id))
    ).toEqual(expectedState);
  });

  it("should handle SET_INVISIBLE_DELETE_LESSON_MODAL", () => {
    const state = {
      confirmDeleteLessonModalVisible: true
    };
    const expectedState = {
      confirmDeleteLessonModalVisible: false
    };
    expect(reducer(state, actions.setInvisibleDeleteLessonModal())).toEqual(
      expectedState
    );
  });

  it("should handle REQUEST_DELETE_LESSON_SUCCESS", () => {
    const state = {
      confirmDeleteLessonModalVisible: true
    };
    const expectedState = {
      confirmDeleteLessonModalVisible: false
    };
    expect(reducer(state, actions.requestDeleteLessonSuccess())).toEqual(
      expectedState
    );
  });
});
