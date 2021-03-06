/**
 *
 * LessonFormContainer actions
 *
 */

import {
  ADD_CONCEPT_TO_NEW_LESSON,
  SET_CARD_TEXT,
  CHANGE_NEW_LESSON_NAME,
  CHANGE_NEW_LESSON_DESCRIPTION,
  SAVE_NEW_LESSON,
  SET_CARD_IMAGE,
  REQUEST_LESSON_TO_EDIT,
  REQUEST_LESSON_TO_EDIT_SUCCESS,
  NEW_LESSON,
  REQUEST_UPDATE_LESSON,
  REQUEST_UPDATE_LESSON_SUCCESS,
  CREATE_NEW_LESSON_SUCCEEDED
} from "./constants";
import * as types from "./constants";

export const addConceptToNewLesson = () => {
  return {
    type: ADD_CONCEPT_TO_NEW_LESSON
  };
};

export const setCardText = (conceptId, cardText, card) => {
  return {
    type: SET_CARD_TEXT,
    payload: {
      conceptId,
      cardText,
      card
    }
  };
};

export const setCardAudio = (conceptId, cardAudio, card) => ({
  type: types.SET_CARD_AUDIO,
  payload: {
    conceptId,
    cardAudio,
    card
  }
});

export const changeNewLessonName = newLessonName => {
  return {
    type: CHANGE_NEW_LESSON_NAME,
    payload: {
      newLessonName
    }
  };
};

export const changeNewLessonDescription = newLessonDescription => {
  return {
    type: CHANGE_NEW_LESSON_DESCRIPTION,
    payload: {
      newLessonDescription
    }
  };
};

export const saveNewLesson = lesson => {
  return {
    type: SAVE_NEW_LESSON,
    payload: {
      lesson
    }
  };
};

export const createNewLessonSucceeded = lesson => {
  return {
    type: CREATE_NEW_LESSON_SUCCEEDED,
    payload: {
      lesson
    }
  };
};

export const setCardImage = (conceptId, fileImage, card) => {
  return {
    type: SET_CARD_IMAGE,
    payload: {
      conceptId,
      fileImage,
      card
    }
  };
};

export const setCardImageSuccess = (conceptId, card, image) => {
  return {
    type: types.SET_CARD_IMAGE_SUCCESS,
    payload: {
      conceptId,
      card,
      image
    }
  };
};

export const requestLessonToEdit = lessonId => {
  return {
    type: REQUEST_LESSON_TO_EDIT,
    payload: {
      lessonId
    }
  };
};

export const requestLessonToEditSuccess = lesson => {
  return {
    type: REQUEST_LESSON_TO_EDIT_SUCCESS,
    payload: {
      lesson
    }
  };
};

export const newLesson = () => {
  return {
    type: NEW_LESSON
  };
};

export const requestUpdateLesson = () => {
  return {
    type: REQUEST_UPDATE_LESSON
  };
};

export const requestUpdateLessonSuccess = lesson => {
  return {
    type: REQUEST_UPDATE_LESSON_SUCCESS,
    payload: {
      lesson
    }
  };
};

export const deleteConcept = lessonId => {
  return {
    type: types.DELETE_CONCEPT,
    payload: { lessonId }
  };
};

export const setCardGIF = (conceptId, card, gifUrl) => {
  return {
    type: types.SET_CARD_GIF,
    payload: { conceptId, card, gifUrl }
  };
};
