/**
 *
 * ConceptList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayConcept from "../PlayConcept";

class ConceptList extends React.Component {
  render() {
    return <PlayConcept />;
  }
}
const mapStateToProps = () => (state, ownProps) => {
  const lessonId = ownProps.match.params.lessonId;
  const lesson = state.lessons.find(lesson => {
    console.log(lesson);
    return lesson.lessonId === lessonId;
  });

  return {
    cardA: lesson,
    lessonId
  };
};

export default connect(mapStateToProps)(ConceptList);
