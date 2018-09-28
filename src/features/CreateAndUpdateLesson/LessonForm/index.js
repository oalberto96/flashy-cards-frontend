/**
 *
 * LessonForm
 *
 */

import React from "react";
import CardForm from "../CardForm";

const LessonForm = () => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="lessonName">Lesson name</label>
				<input type="text" className="form-control" id="lessonName" />
			</div>
			<div className="form-group">
				<label htmlFor="lessonDescription">Lesson description</label>
				<textarea type="text" className="form-control" id="lessonDescription" />
			</div>
			<div className="form-group">
				<div className="row">
					<div className="col-md-6">
						<CardForm />
					</div>
					<div className="col-md-6">
						<CardForm />
					</div>
				</div>
			</div>
			<div className="form-group text-center">
				<button
					className="btn create-lesson-button center-block"
					onClick={event => {
						event.preventDefault();
					}}>
					Add new concept
				</button>
			</div>
		</form>
	);
};

export default LessonForm;
