import * as actionTypes from "./constants";
import moment from "moment";

const initialState = {
  score: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REQUEST_LESSON_SCORE_SUCCESS:
      const score = payload.map(scoreSet => ({
        date: moment(scoreSet.date),
        mistakes: scoreSet.mistakes
      }));
      return { ...state, score: score };
    default:
      return state;
  }
};
