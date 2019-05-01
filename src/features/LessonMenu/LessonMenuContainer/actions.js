import * as actionTypes from "./constants";
export const requestLesson = lessonId => {
  return {
    type: actionTypes.REQUEST_LESSON,
    payload: {
      lessonId
    }
  };
};

export const requestLessonSuccess = lesson => {
  return {
    type: actionTypes.REQUEST_LESSON_SUCCESS,
    payload: {
      lesson
    }
  };
};
