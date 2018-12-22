/**
 *
 * LessonListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LessonList from "../LessonList";
import {
  requestLessons,
  setVisibleDeleteLessonModal,
  setInvisibleDeleteLessonModal,
  requestDeleteLesson
} from "./actions";

class LessonListContainer extends React.Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.requestLessons();
  }

  render() {
    return <LessonList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lessons: state.lessons.lessons,
    confirmDelete: state.lessons.confirmDeleteLessonModalVisible
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestLessons: () => dispatch(requestLessons()),
    setVisibleConfirmDelete: lesson_id =>
      dispatch(setVisibleDeleteLessonModal(lesson_id)),
    setInvisibleConfirmDelete: () => dispatch(setInvisibleDeleteLessonModal()),
    requestDeleteLesson: () => dispatch(requestDeleteLesson())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonListContainer);
