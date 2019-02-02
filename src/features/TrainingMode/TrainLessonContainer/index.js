import React from "react";

import TrainLesson from "../TrainLesson";
import * as selectors from "../selectors";
import * as actions from "../actions";

export const TrainLessonContainer = props => {
  return <TrainLesson {...props} />;
};
export const mapStateToProps = (state, ownProps) => {
  return {
    lesson: selectors.getLesson(state),
    isRatingConcept: selectors.getRateConcept(state),
    showAnswer: selectors.getShowAnswer(state),
    queue: selectors.getQueue(state),
    conceptsDone: selectors.getConceptsDone(state)
  };
};
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showAnswer: coneptId => dispatch(actions.showAnswer(coneptId)),
    rateConcept: conceptId => dispatch(actions.rateConcept(conceptId)),
    rateConceptBad: conceptId => dispatch(actions.rateConceptBad(conceptId)),
    rateConceptGood: conceptId => dispatch(actions.rateConceptGood(conceptId))
  };
};
export default TrainLessonContainer;
