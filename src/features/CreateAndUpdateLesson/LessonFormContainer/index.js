/**
 *
 * LessonFormContainer
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import LessonForm from "../LessonForm";
import {
	addConceptToNewLesson,
	setCardText,
	changeNewLessonName,
	changeNewLessonDescription,
	saveNewLesson
} from "./actions";

class LessonFormContainer extends Component {
	render() {
		return <LessonForm {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		concepts: state.newLesson.concepts,
		lessonName: state.newLesson.lessonName,
		lessonDescription: state.newLesson.lessonDescription,
		lesson: state.newLesson
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addNewConcept: () => dispatch(addConceptToNewLesson()),
		setCardText: (conceptId, cardText, card) =>
			dispatch(setCardText(conceptId, cardText, card)),
		changeNewLessonName: newName => dispatch(changeNewLessonName(newName)),
		changeNewLessonDescription: newDescription =>
			dispatch(changeNewLessonDescription(newDescription)),
		saveNewLesson: lesson => dispatch(saveNewLesson(lesson))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LessonFormContainer);
