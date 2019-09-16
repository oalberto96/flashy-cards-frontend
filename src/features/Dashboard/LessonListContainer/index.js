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
  requestDeleteLesson,
  reverseList
} from "./actions";
import { getLessons, deleteModalIsVisible } from "./selectors";

class LessonListContainer extends React.Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired
  };

  componentWillMount() {
    this.props.requestLessons();
  }

  render() {
    if (this.props.lessons.length > 0) {
      return <LessonList {...this.props} />;
    } else {
      return (
        <div className="container featureMargin">
          <div className="collection-list">
            <h1 className>You don't have lessons yet</h1>{" "}
          </div>
        </div>
      );
    }
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
    requestDeleteLesson: bindActionCreators(requestDeleteLesson, dispatch),
    reverseList: bindActionCreators(reverseList, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonListContainer);
