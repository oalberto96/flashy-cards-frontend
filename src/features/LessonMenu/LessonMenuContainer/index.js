import React, { Component } from "react";
import * as actions from "./actions";
import { connect } from "react-redux";
import LessonMenu from "../LessonMenu";

export class LessonMenuContainer extends Component {
  componentWillMount() {
    this.props.requestLesson(this.props.match.params.lessonId);
  }

  render = () => {
    return <LessonMenu {...this.props} />;
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    requestLesson: lessonId => dispatch(actions.requestLesson(lessonId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonMenuContainer);
