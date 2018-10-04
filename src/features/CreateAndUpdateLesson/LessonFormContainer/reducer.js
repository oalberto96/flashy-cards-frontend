/**
 *
 * LessonFormContainer reducer
 *
 */

import {
	ADD_CONCEPT_TO_NEW_LESSON,
	SET_CARD_TEXT,
	CHANGE_NEW_LESSON_NAME,
	CHANGE_NEW_LESSON_DESCRIPTION,
	SAVE_NEW_LESSON,
	SET_CARD_IMAGE,
	REQUEST_LESSON_TO_EDIT_SUCCESS
} from "./constants";

const initialState = {
	lessonName: "",
	lessonDescription: "",
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
		case SET_CARD_IMAGE:
			const cardImage = action.payload.cardImage;
			conceptsCopy = state.concepts.map(concept => {
				if (concept.conceptId === action.payload.conceptId) {
					action.payload.card === "A"
						? (concept.cardA = {
								...concept.cardA,
								media: {
									type: "IMAGE",
									source: cardImage
								}
						  })
						: (concept.cardB = {
								...concept.cardA,
								media: {
									type: "IMAGE",
									source: cardImage
								}
						  });
				}
				return concept;
			});
			return { ...state, concepts: conceptsCopy };
		case CHANGE_NEW_LESSON_NAME:
			return { ...state, lessonName: action.payload.newLessonName };
		case CHANGE_NEW_LESSON_DESCRIPTION:
			return {
				...state,
				lessonDescription: action.payload.newLessonDescription
			};
		case SAVE_NEW_LESSON:
			return initialState;
		case REQUEST_LESSON_TO_EDIT_SUCCESS:
			const lesson = { ...action.payload.lesson };
			return lesson;
		default:
			return state;
	}
}

export default LessonFormContainerReducer;
