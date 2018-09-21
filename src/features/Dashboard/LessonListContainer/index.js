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
    lists: PropTypes.array.isRequired
  };
  render() {
    return <LessonList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists
  };
};

export default connect(mapStateToProps)(LessonListContainer);
