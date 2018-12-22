/**
 *
 * LessonListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LessonList from "../LessonList";
import {
  requestLessons,
  setVisibleDeleteLessonModal,
  setInvisibleDeleteLessonModal,
  requestDeleteLesson
} from "./actions";
import { getLessons, deleteModalIsVisible } from "./selectors";

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

const mapStateToProps = state => {
  return {
    lessons: getLessons(state),
    confirmDelete: deleteModalIsVisible(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLessons: bindActionCreators(requestLessons, dispatch),
    setVisibleConfirmDelete: bindActionCreators(
      setVisibleDeleteLessonModal,
      dispatch
    ),
    setInvisibleConfirmDelete: bindActionCreators(
      setInvisibleDeleteLessonModal,
      dispatch
    ),
    requestDeleteLesson: bindActionCreators(requestDeleteLesson, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonListContainer);
