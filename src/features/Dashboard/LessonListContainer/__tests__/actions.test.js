/**
 *
 * LessonListContainer action creators tests
 *
 */
import * as types from "../constants";
import * as actions from "../actions";

describe("LessonList actions", () => {
  it("should create an action to set visible the delete lesson modal", () => {
    const lesson_id = 1;
    const expectedAction = {
      type: types.SET_VISIBLE_DELETE_LESSON_MODAL,
      payload: { lesson_id }
    };
    expect(actions.setVisibleDeleteLessonModal(lesson_id)).toEqual(
      expectedAction
    );
  });

  it("should create an action to set invisible the delete lesson modal", () => {
    const expectedAction = {
      type: types.SET_INVISIBLE_DELETE_LESSON_MODAL
    };
    expect(actions.setInvisibleDeleteLessonModal()).toEqual(expectedAction);
  });

  it("should create an action to delete a lesson", () => {
    const expectedAction = {
      type: types.REQUEST_DELETE_LESSON
    };
    expect(actions.requestDeleteLesson()).toEqual(expectedAction);
  });

  it("should create an action to notificate success at delete a lesson", () => {
    const expectedAction = {
      type: types.REQUEST_DELETE_LESSON_SUCCESS
    };
    expect(actions.requestDeleteLessonSuccess()).toEqual(expectedAction);
  });

  it("should create an action to notificate an error at delete a lesson", () => {
    const expectedAction = {
      type: types.REQUEST_DELETE_LESSON_ERROR
    };
    expect(actions.requestDeleteLessonError()).toEqual(expectedAction);
  });

  it("should create an action to request lessons", () => {
    const expectedAction = {
      type: types.REQUEST_LESSONS
    };
    expect(actions.requestLessons()).toEqual(expectedAction);
  });

  it("should create an action to notificate success at request lessons", () => {
    const lessons = [{ id: 1 }];
    const expectedAction = {
      type: types.REQUEST_LESSONS_SUCCEEDED,
      payload: { lessons }
    };
    expect(actions.requestLessonsSucceeded(lessons)).toEqual(expectedAction);
  });
});
