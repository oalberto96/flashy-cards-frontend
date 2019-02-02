import React from "react";
import PropTypes from "prop-types";
import Card from "../../Play/Card";

class TrainLesson extends React.Component {
  componentWillMount() {
    this.props.requestLessonToTrain();
  }

  render() {
    let answer = null;
    if (this.props.isAnswerVisible && this.props.cardB) {
      answer = (
        <Card
          cardText={this.props.cardB.text}
          cardMedia={this.props.cardB.media}
        />
      );
    } else {
      answer = (
        <button
          onClick={() => this.props.showAnswer() && this.props.rateConcept()}
        >
          ...
        </button>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-6 col-md-6">
            {this.props.cardA && (
              <Card
                cardText={this.props.cardA.text}
                cardMedia={this.props.cardA.media}
              />
            )}
          </div>
          <div className="col-6 col-md-6">{answer}</div>
        </div>
        {this.props.isRatingConcept && (
          <div className="row">
            <button
              onClick={() =>
                this.props.rateConceptGood(this.props.currentConceptId)
              }
            >
              Bien
            </button>
            <button
              onClick={() =>
                this.props.rateConceptBad(this.props.currentConceptId)
              }
            >
              Mal
            </button>
          </div>
        )}
      </div>
    );
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
  requestLessonToTrain: PropTypes.func.isRequired
};

export default TrainLesson;
