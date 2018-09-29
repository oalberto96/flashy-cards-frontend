/**
 *
 * LessonForm
 *
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import CardForm from "../CardForm";

class LessonForm extends Component {
	static propTypes = {
		addNewConcept: PropTypes.func.isRequired,
		concepts: PropTypes.array.isRequired
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="lessonName">Lesson name</label>
					<input type="text" className="form-control" id="lessonName" />
				</div>
				<div className="form-group">
					<label htmlFor="lessonDescription">Lesson description</label>
					<textarea
						type="text"
						className="form-control"
						id="lessonDescription"
					/>
				</div>
				{this.props.concepts.map((concept, index) => (
					<div key={index} className="form-group">
						<div className="row">
							<div className="col-md-6">
								<CardForm />
							</div>
							<div className="col-md-6">
								<CardForm />
							</div>
						</div>
					</div>
				))}
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
