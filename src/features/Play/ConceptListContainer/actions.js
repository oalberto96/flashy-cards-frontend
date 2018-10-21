/**
 *
 * ConceptListContainer actions
 *
 */

import { LOAD_LESSON_TO_PLAY, LOAD_LESSON_TO_PLAY_SUCCESS } from "./constants";

export const loadLessonToPlay = lessonId => {
  return {
    type: LOAD_LESSON_TO_PLAY,
    payload: { lessonId }
  };
};

export const loadLessonToPlaySuccess = lesson => {
  return {
    type: LOAD_LESSON_TO_PLAY_SUCCESS,
    payload: { lesson }
  };
};
