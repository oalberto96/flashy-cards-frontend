/**
 *
 * LessonFormContainer reducer
 *
 */

import { ADD_CONCEPT_TO_NEW_LESSON } from "./constants";

const initialState = {
	concepts: []
};

function LessonFormContainerReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_CONCEPT_TO_NEW_LESSON:
			let conceptsCopy = state.concepts.slice();
			conceptsCopy.push({ cardA: { text: "" }, cardB: { text: "" } });
			let newLesson = { concepts: conceptsCopy };
			return { ...state, ...newLesson };
		default:
			return state;
	}
}

export default LessonFormContainerReducer;
