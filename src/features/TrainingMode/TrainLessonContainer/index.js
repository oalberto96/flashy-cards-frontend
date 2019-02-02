import React from "react";
import { connect } from "react-redux";

import TrainLesson from "../TrainLesson";
import * as selectors from "../selectors";
import * as actions from "../actions";

export const TrainLessonContainer = props => {
  return <TrainLesson {...props} />;
};
export const mapStateToProps = state => {
  return {
    currentConceptId: selectors.getCurrentConceptId(state),
    cardA: selectors.getCurrentConceptCardA(state),
    cardB: selectors.getCurrentConceptCardB(state),
    lesson: selectors.getLesson(state),
    isRatingConcept: selectors.getRateConcept(state),
    isAnswerVisible: selectors.getShowAnswer(state),
    queue: selectors.getQueue(state),
    conceptsDone: selectors.getConceptsDone(state)
  };
};
export const mapDispatchToProps = (dispatch, ownProps) => {
  const lessonId = ownProps.match.params.lessonId;
  return {
    requestLessonToTrain: () =>
      dispatch(actions.requestLessonToTrain(lessonId)),
    showAnswer: coneptId => dispatch(actions.showAnswer(coneptId)),
    rateConcept: conceptId => dispatch(actions.rateConcept(conceptId)),
    rateConceptBad: conceptId => dispatch(actions.rateConceptBad(conceptId)),
    rateConceptGood: conceptId => dispatch(actions.rateConceptGood(conceptId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainLessonContainer);
