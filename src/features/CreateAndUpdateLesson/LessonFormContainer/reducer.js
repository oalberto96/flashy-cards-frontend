/**
 *
 * LessonFormContainer reducer
 *
 */
import { generateConceptId } from "../../../common/utils/lessons";
import {
  SAVE_NEW_LESSON,
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
    case types.SET_CARD_IMAGE_SUCCESS:
      const cardImage = action.payload.image;
      let image = new Image();
      image.src = cardImage;
      conceptsCopy = state.concepts.map(concept => {
        if (concept.id === action.payload.conceptId) {
          if (action.payload.card === "A") {
            return {
              ...concept,
              cardA: {
                ...concept.cardA,
                media: {
                  mediaType: mediaTypes.IMAGE,
                  source: cardImage,
                  imageFile: cardImage
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
                  source: cardImage,
                  imageFile: cardImage
                }
              }
            };
          }
        }
        return concept;
      });
      return { ...state, concepts: conceptsCopy };
    case types.CHANGE_NEW_LESSON_NAME:
      return { ...state, name: action.payload.newLessonName };
    case types.CHANGE_NEW_LESSON_DESCRIPTION:
      return {
        ...state,
        description: action.payload.newLessonDescription
      };
    case SAVE_NEW_LESSON:
      return initialState;
    case REQUEST_LESSON_TO_EDIT_SUCCESS:
      return {
        ...action.payload.lesson,
        deletedConcepts: [],
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
    case types.SET_CARD_GIF: {
      let concepts = state.concepts.map(concept => {
        if (concept.id === action.payload.conceptId) {
          if (action.payload.card === "A") {
            return {
              ...concept,
              cardA: {
                ...concept.cardA,
                media: {
                  mediaType: mediaTypes.GIF,
                  source: action.payload.gifUrl
                }
              }
            };
          } else {
            return {
              ...concept,
              cardB: {
                ...concept.cardB,
                media: {
                  mediaType: mediaTypes.GIF,
                  source: action.payload.gifUrl
                }
              }
            };
          }
        }
        return concept;
      });
      return { ...state, concepts: concepts };
    }
    default:
      return state;
  }
}

export default LessonFormContainerReducer;
