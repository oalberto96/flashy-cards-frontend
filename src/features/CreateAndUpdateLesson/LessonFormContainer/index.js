/**
 *
 * LessonFormContainer
 *
 */

import React from "react";
import { connect } from "react-redux";
import LessonForm from "../LessonForm";
import {
  addConceptToNewLesson,
  changeNewLessonName,
  changeNewLessonDescription,
  saveNewLesson,
  requestLessonToEdit,
  newLesson,
  requestUpdateLesson
} from "./actions";
import * as actions from "./actions";

export const LessonFormContainer = props => {
  return <LessonForm {...props} />;
};

export const mapStateToProps = (state, ownProps) => {
  return {
    concepts: state.newLesson.concepts,
    name: state.newLesson.name,
    description: state.newLesson.description,
    lesson: state.newLesson
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewConcept: () => dispatch(addConceptToNewLesson()),
    changeNewLessonName: newName => dispatch(changeNewLessonName(newName)),
    changeNewLessonDescription: newDescription =>
      dispatch(changeNewLessonDescription(newDescription)),
    saveNewLesson: lesson => dispatch(saveNewLesson(lesson)),
    requestLessonToEdit: lessonId => dispatch(requestLessonToEdit(lessonId)),
    newLesson: () => dispatch(newLesson()),
    requestUpdateLesson: () => dispatch(requestUpdateLesson()),
    deleteConcept: lessonId => dispatch(actions.deleteConcept(lessonId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonFormContainer);
