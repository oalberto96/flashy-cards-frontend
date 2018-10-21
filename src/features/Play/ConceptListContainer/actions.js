/**
 *
 * ConceptListContainer actions
 *
 */

import {
  LOAD_LESSON_TO_PLAY,
  LOAD_LESSON_TO_PLAY_SUCCESS,
  MOVE_TO_NEXT_CARD,
  MOVE_TO_PREVIOUS_CARD
} from "./constants";

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

export const moveToNextCard = () => {
  return {
    type: MOVE_TO_NEXT_CARD
  };
};

export const moveToPreviousCard = () => {
  return {
    type: MOVE_TO_PREVIOUS_CARD
  };
};
