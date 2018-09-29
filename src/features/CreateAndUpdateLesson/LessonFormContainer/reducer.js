/**
 *
 * LessonFormContainer reducer
 *
 */

import { ADD_CONCEPT_TO_NEW_LESSON, SET_CARD_TEXT } from "./constants";

const initialState = {
	concepts: []
};

function LessonFormContainerReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_CONCEPT_TO_NEW_LESSON:
			let conceptsCopy = state.concepts.slice();
			let lastConceptAdded = conceptsCopy[conceptsCopy.length - 1];
			conceptsCopy.push({
				conceptId:
					lastConceptAdded !== undefined ? lastConceptAdded.conceptId + 1 : 0,
				cardA: { text: "" },
				cardB: { text: "" }
			});
			let newLesson = { concepts: conceptsCopy };
			return { ...state, ...newLesson };
		case SET_CARD_TEXT:
			let cardText = action.payload.cardText;
			conceptsCopy = state.concepts.map(concept => {
				if (concept.conceptId === action.payload.conceptId) {
					action.payload.card === "A"
						? (concept.cardA = { ...concept.cardA, text: cardText })
						: (concept.cardB = { ...concept.cardB, text: cardText });
					return { ...concept };
				}
				return concept;
			});
			return { ...state };
		default:
			return state;
	}
}

export default LessonFormContainerReducer;
