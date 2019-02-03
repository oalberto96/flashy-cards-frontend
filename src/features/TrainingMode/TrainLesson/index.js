import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Game from "../Game";
import TrainLessonStatisticsContainer from "../TrainLessonStatisticsContainer";

class TrainLesson extends React.Component {
  componentWillMount() {
    this.props.requestLessonToTrain();
  }

  render() {
    let screen = null;
    if (this.props.cardA && this.props.queue.length > 0) {
      screen = <Game {...this.props} />;
    } else if (this.props.conceptsDone.length > 0) {
      screen = <TrainLessonStatisticsContainer />;
    }
    this.props.trainingFinished && (screen = <Redirect to="/dashboard" />);
    return screen;
  }
}

TrainLesson.propTypes = {
  cardA: PropTypes.object,
  cardB: PropTypes.object,
  currentConceptId: PropTypes.number,
  isRatingConcept: PropTypes.bool.isRequired,
  isAnswerVisible: PropTypes.bool.isRequired,
  queue: PropTypes.array.isRequired,
  conceptsDone: PropTypes.array.isRequired,
  showAnswer: PropTypes.func.isRequired,
  rateConcept: PropTypes.func.isRequired,
  rateConceptBad: PropTypes.func.isRequired,
  rateConceptGood: PropTypes.func.isRequired,
  requestLessonToTrain: PropTypes.func.isRequired,
  trainingFinished: PropTypes.bool
};

export default TrainLesson;
