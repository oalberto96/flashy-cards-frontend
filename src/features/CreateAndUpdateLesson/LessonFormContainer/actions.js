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
	SET_CARD_IMAGE
} from "./constants";

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

export const setCardImage = (conceptId, cardImage, card) => {
	return {
		type: SET_CARD_IMAGE,
		payload: {
			conceptId,
			cardImage,
			card
		}
	};
};
