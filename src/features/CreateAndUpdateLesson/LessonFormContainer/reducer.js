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
  REQUEST_LESSON_TO_EDIT_SUCCESS,
  NEW_LESSON
} from "./constants";

const initialState = {
  name: "",
  description: "",
  audience: { id: 1 },
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
      let key = null;
      conceptsCopy = state.concepts.map(concept => {
        if (concept.id === action.payload.conceptId) {
          key = action.payload.card === "A" ? "cardA" : "cardB";
          return {
            ...concept,
            [key]: { ...concept[key], text: cardText }
          };
        }
        return concept;
      });
      return { ...state, concepts: conceptsCopy };
    case SET_CARD_IMAGE:
      const cardImage = action.payload.cardImage;
      conceptsCopy = state.concepts.map(concept => {
        if (concept.id === action.payload.conceptId) {
          action.payload.card === "A"
            ? (concept.cardA = {
                ...concept.cardA,
                media: {
                  mediaType: {
                    id: 1,
                    name: "IMAGE"
                  },
                  source: cardImage
                }
              })
            : (concept.cardB = {
                ...concept.cardB,
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
      return { ...state, name: action.payload.newLessonName };
    case CHANGE_NEW_LESSON_DESCRIPTION:
      return {
        ...state,
        description: action.payload.newLessonDescription
      };
    case SAVE_NEW_LESSON:
      return initialState;
    case REQUEST_LESSON_TO_EDIT_SUCCESS:
      return {
        ...action.payload.lesson,
        concepts: action.payload.lesson.concepts.map(concept => ({
          ...concept
        }))
      };
    case NEW_LESSON:
      return initialState;
    default:
      return state;
  }
}

export default LessonFormContainerReducer;
