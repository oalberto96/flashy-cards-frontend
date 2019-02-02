import React from "react";
import { connect } from "react-redux";

import * as selectors from "../selectors";
import * as actions from "../actions";
import TrainLessonStatistics from "../TrainLessonStatistics";

export const TrainLessonStatisticsContainer = props => {
  return <TrainLessonStatistics {...props} />;
};

export const mapStateToProps = state => {
  return {
    conceptsWithScore: selectors.getConceptsWithScore(state),
    lessonId: selectors.getLessonId(state),
    conceptsDone: selectors.getConceptsDone(state)
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    saveScore: (lessonId, conceptsScore) =>
      dispatch(actions.saveTrainingScore(lessonId, conceptsScore))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainLessonStatisticsContainer);
