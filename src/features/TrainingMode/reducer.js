/**
 *
 * Reducer training mode
 *
 */
import * as actionTypes from "./constants";

const initialState = {
  lesson: {},
  showAnswer: false,
  rateConcept: false,
  conceptsDone: [],
  queue: []
};

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
      return {
        lesson: copyLesson,
        queue,
        conceptsDone: [],
        showAnswer: false,
        rateConcept: false
      };
    }
    case actionTypes.SHOW_ANSWER: {
      return { ...state, showAnswer: true };
    }
    case actionTypes.RATE_CONCEPT: {
      return { ...state, rateConcept: true };
    }
    case actionTypes.RATE_CONCEPT_GOOD: {
      const conceptsDone = state.conceptsDone.slice();
      const queue = [];
      state.queue.forEach(concept => {
        if (concept.id === action.payload.conceptId) {
          conceptsDone.push({ ...concept });
          return;
        }
        queue.push({ ...concept });
      });
      return {
        ...state,
        queue,
        conceptsDone,
        showAnswer: false,
        rateConcept: false
      };
    }
    case actionTypes.RATE_CONCEPT_BAD: {
      const queue = [];
      let conceptPopped = null;
      state.queue.forEach(concept => {
        if (concept.id === action.payload.conceptId) {
          conceptPopped = { id: concept.id, mistakes: concept.mistakes + 1 };
          return;
        }
        queue.push({ ...concept });
      });
      const random = Math.floor(Math.random() * queue.length + 1);
      queue.splice(random, 0, conceptPopped);
      return { ...state, queue, showAnswer: false, rateConcept: false };
    }
    case actionTypes.SAVE_TRAINING_SCORE_SUCCESS: {
      return { ...state, trainingFinished: true };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
