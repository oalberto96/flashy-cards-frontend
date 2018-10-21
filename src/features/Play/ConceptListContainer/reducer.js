/**
 *
 * ConceptListContainer Reducer
 *
 */
import { LOAD_LESSON_TO_PLAY_SUCCESS } from "./constants";

const initialState = {};

function ConceptListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LESSON_TO_PLAY_SUCCESS:
      return { ...action.payload.lesson };
    default:
      return state;
  }
}

export default ConceptListContainerReducer;
