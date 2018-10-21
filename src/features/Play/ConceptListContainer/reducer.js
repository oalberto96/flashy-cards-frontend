/**
 *
 * ConceptListContainer Reducer
 *
 */
import {
  LOAD_LESSON_TO_PLAY_SUCCESS,
  MOVE_TO_NEXT_CARD,
  MOVE_TO_PREVIOUS_CARD
} from "./constants";

const initialState = {};

function ConceptListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LESSON_TO_PLAY_SUCCESS:
      return { ...action.payload.lesson };
    case MOVE_TO_NEXT_CARD:
      if (state.index + 1 < state.concepts.length) {
        return { ...state, index: state.index + 1 };
      }
      return state;
    case MOVE_TO_PREVIOUS_CARD:
      if (state.index - 1 >= 0) {
        return { ...state, index: state.index - 1 };
      }
      return state;
    default:
      return state;
  }
}

export default ConceptListContainerReducer;
