/**
 *
 * ConceptListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayConcept from "../PlayConcept";

class ConceptListContainer extends React.Component {
  render() {
    return <PlayConcept {...this.props.concepts[0]} />;
  }
}
const mapStateToProps = () => (state, ownProps) => {
  const lessonId = ownProps.match.params.lessonId;
  const lesson = state.lessons.find(
    lesson => lesson.lessonId.toString() === lessonId
  );
  return {
    concepts: lesson.concepts,
    lessonId
  };
};

export default connect(mapStateToProps)(ConceptListContainer);
