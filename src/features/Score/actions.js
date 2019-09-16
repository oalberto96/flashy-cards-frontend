import * as actionTypes from "./constants";

export const requestLessonScore = lessonId => ({
  type: actionTypes.REQUEST_LESSON_SCORE,
  payload: lessonId
});
