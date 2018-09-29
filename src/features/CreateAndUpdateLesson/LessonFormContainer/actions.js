/**
 *
 * LessonFormContainer actions
 *
 */

import { ADD_CONCEPT_TO_NEW_LESSON, SET_CARD_TEXT } from "./constants";

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
