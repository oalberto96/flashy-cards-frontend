/**
 *
 * LessonFormContainer
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import LessonForm from "../LessonForm";
import { addConceptToNewLesson } from "./actions";

class LessonFormContainer extends Component {
	render() {
		return <LessonForm {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		concepts: state.newLesson.concepts
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addNewConcept: () => dispatch(addConceptToNewLesson())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LessonFormContainer);
