import * as actionTypes from "./constants";

export const requestLessonScore = lessonId => ({
  type: actionTypes.REQUEST_LESSON_SCORE,
  payload: lessonId
});

export const requestLessonScoreSuccess = score => ({
  type: actionTypes.REQUEST_LESSON_SCORE_SUCCESS,
  payload: score
});
