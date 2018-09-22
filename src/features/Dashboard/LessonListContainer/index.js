/**
 *
 * LessonListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LessonList from "../LessonList";

class LessonListContainer extends React.Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired
  };
  render() {
    return <LessonList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lessons: state.lessons
  };
};

export default connect(mapStateToProps)(LessonListContainer);
