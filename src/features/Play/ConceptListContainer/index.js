/**
 *
 * ConceptListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayConcept from "../PlayConcept";
import { loadLessonToPlay } from "./actions";

class ConceptListContainer extends React.Component {
  state = { index: 0 };

  componentWillMount() {
    this.props.loadLessonToPlay();
  }

  nextCard = () => {
    if (this.state.index + 1 < this.props.lesson.concepts.length) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  prevCard = () => {
    if (this.state.index - 1 >= 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    return this.props.lesson.concepts &&
      this.props.lesson.concepts.length > 0 ? (
      <PlayConcept
        listLength={this.props.lesson.concepts.length}
        index={this.state.index}
        nextCard={this.nextCard}
        prevCard={this.prevCard}
        cardA={this.props.lesson.concepts[this.state.index].cardA}
        cardB={this.props.lesson.concepts[this.state.index].cardB}
      />
    ) : (
      <p>This lesson is empty</p>
    );
  }
}
const mapStateToProps = () => (state, ownProps) => {
  return {
    lesson: state.playingLesson
  };
};

const mapDispatchToProps = () => (dispatch, ownProps) => {
  return {
    loadLessonToPlay: () =>
      dispatch(loadLessonToPlay(parseInt(ownProps.match.params.lessonId, 0)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptListContainer);
