/**
 *
 * Reducer training mode
 *
 */
import * as actionTypes from "./constants";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LESSON_TO_TRAIN_SUCCESS: {
      const lesson = action.payload.lesson;
      const copyLesson = {
        ...action.payload.lesson,
        concepts: lesson.concepts.map(concept => ({
          ...concept,
          cardA: { ...concept.cardA },
          cardB: { ...concept.cardB }
        }))
      };
      const queue = copyLesson.concepts.map(concept => ({
        id: concept.id,
        mistakes: 0
      }));
      return { lesson: copyLesson, queue, conceptsDone: [], showAnswer: false };
    }
    case actionTypes.SHOW_ANSWER: {
      return { ...state, showAnswer: true };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
