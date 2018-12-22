/**
 *
 * LessonListContainer actions
 *
 */

import {
  REQUEST_LESSONS,
  REQUEST_LESSONS_SUCCEEDED,
  SET_VISIBLE_DELETE_LESSON_MODAL,
  SET_INVISIBLE_DELETE_LESSON_MODAL,
  REQUEST_DELETE_LESSON,
  REQUEST_DELETE_LESSON_SUCCESS,
  REQUEST_DELETE_LESSON_ERROR
} from "./constants";

export const setVisibleDeleteLessonModal = lesson_id => {
  return {
    type: SET_VISIBLE_DELETE_LESSON_MODAL,
    payload: { lesson_id }
  };
};

export const setInvisibleDeleteLessonModal = () => {
  return {
    type: SET_INVISIBLE_DELETE_LESSON_MODAL
  };
};

export const requestDeleteLesson = () => {
  return {
    type: REQUEST_DELETE_LESSON
  };
};

export const requestDeleteLessonSuccess = () => {
  return {
    type: REQUEST_DELETE_LESSON_SUCCESS
  };
};

export const requestDeleteLessonError = () => {
  return {
    type: REQUEST_DELETE_LESSON_ERROR
  };
};

export const requestLessons = () => {
  return {
    type: REQUEST_LESSONS
  };
};

export const requestLessonsSucceeded = lessons => {
  return {
    type: REQUEST_LESSONS_SUCCEEDED,
    payload: {
      lessons
    }
  };
};
