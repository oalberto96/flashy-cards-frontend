/**
 *
 * LessonForm
 *
 */

import React, { Component } from "react";

import PropTypes from "prop-types";
import TextInput from "../../../components/common/TextInput";
import TextAreaInput from "../../../components/common/TextAreaInput";
import ConceptList from "../ConceptList";

class LessonForm extends Component {
	static propTypes = {
		addNewConcept: PropTypes.func.isRequired,
		concepts: PropTypes.array.isRequired,
		setCardText: PropTypes.func.isRequired,
		lessonName: PropTypes.string.isRequired
	};

	render() {
		return (
			<form>
				<div className="form-group row">
					<div className="col-md-6">
						<h1>Lesson</h1>
					</div>
					<div className="col-md-6">
						<button
							className="btn pull-right"
							onClick={event => {
								event.preventDefault();
								console.log("Save");
							}}>
							Save lesson
						</button>
					</div>
				</div>
				<TextInput
					divClassName="form-group"
					label="Lesson name"
					inputClassName="form-control"
					inputId="lessonName"
					defaultValue={this.props.lessonName}
					onBlur={text => this.props.changeNewLessonName(text)}
				/>
				<TextAreaInput
					divClassName="form-group"
					label="Lesson description"
					inputClassName="form-control"
					inputId="lessonDescription"
					defaultValue={this.props.lessonDescription}
					onBlur={text => this.props.changeNewLessonDescription(text)}
				/>
				<ConceptList
					concepts={this.props.concepts}
					setCardText={this.props.setCardText}
				/>
				<div className="form-group text-center">
					<button
						className="btn create-lesson-button center-block"
						onClick={event => {
							event.preventDefault();
							this.props.addNewConcept();
						}}>
						Add new concept
					</button>
				</div>
			</form>
		);
	}
}

export default LessonForm;
