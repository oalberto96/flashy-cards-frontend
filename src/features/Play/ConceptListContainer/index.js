/**
 *
 * ConceptListContainer
 *
 */

import React from "react";
import { connect } from "react-redux";
import PlayConcept from "../PlayConcept";
import {
  loadLessonToPlay,
  moveToNextCard,
  moveToPreviousCard
} from "./actions";

export class ConceptListContainer extends React.Component {
  componentWillMount() {
    this.props.loadLessonToPlay();
  }

  render() {
    return this.props.lesson.concepts &&
      this.props.lesson.concepts.length > 0 ? (
      <PlayConcept
        listLength={this.props.lesson.concepts.length}
        index={this.props.lesson.index}
        nextCard={this.props.moveToNextCard}
        prevCard={this.props.moveToPreviousCard}
        cardA={this.props.lesson.concepts[this.props.lesson.index].cardA}
        cardB={this.props.lesson.concepts[this.props.lesson.index].cardB}
      />
    ) : (
      <p>This lesson is empty</p>
    );
  }
}
export const mapStateToProps = state => {
  return {
    lesson: state.playingLesson
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadLessonToPlay: () =>
      dispatch(loadLessonToPlay(parseInt(ownProps.match.params.lessonId, 0))),
    moveToNextCard: () => dispatch(moveToNextCard()),
    moveToPreviousCard: () => dispatch(moveToPreviousCard())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptListContainer);
