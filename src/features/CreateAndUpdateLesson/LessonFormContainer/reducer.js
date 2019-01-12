/**
 *
 * LessonFormContainer reducer
 *
 */
import { generateConceptId } from "../../../common/utils/lessons";
import {
  SET_CARD_TEXT,
  CHANGE_NEW_LESSON_NAME,
  CHANGE_NEW_LESSON_DESCRIPTION,
  SAVE_NEW_LESSON,
  SET_CARD_IMAGE,
  REQUEST_LESSON_TO_EDIT_SUCCESS,
  NEW_LESSON
} from "./constants";
import * as types from "./constants";
import * as mediaTypes from "../../../common/constants/mediaTypes";

const initialState = {
  name: "",
  description: "",
  audience: { id: 1 },
  concepts: [],
  deletedConcepts: []
};

function LessonFormContainerReducer(state = initialState, action) {
  let conceptsCopy = null;
  switch (action.type) {
    case types.ADD_CONCEPT_TO_NEW_LESSON:
      conceptsCopy = state.concepts.map(concept => ({
        ...concept
      }));
      let lastConceptAdded = conceptsCopy[conceptsCopy.length - 1];
      conceptsCopy.push({
        id: generateConceptId(lastConceptAdded),
        cardA: { text: "" },
        cardB: { text: "" }
      });
      let newLesson = { concepts: conceptsCopy };
      return { ...state, ...newLesson };
    case types.SET_CARD_TEXT:
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
          if (action.payload.card === "A") {
            return {
              ...concept,
              cardA: {
                ...concept.cardA,
                media: {
                  mediaType: mediaTypes.IMAGE,
                  source: cardImage
                }
              }
            };
          } else {
            return {
              ...concept,
              cardB: {
                ...concept.cardB,
                media: {
                  mediaType: mediaTypes.IMAGE,
                  source: cardImage
                }
              }
            };
          }
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
    case types.DELETE_CONCEPT:
      const concepts = state.concepts.filter(
        concept => concept.id !== action.payload.lessonId
      );
      let deletedConcepts = state.deletedConcepts.slice();
      deletedConcepts.push(action.payload.lessonId);
      return { ...state, concepts, deletedConcepts };
    default:
      return state;
  }
}

export default LessonFormContainerReducer;
