/**
 *
 * CreateAndUpdateLesson
 *
 */

import React from "react";
import LessonFormContainer from "./LessonFormContainer";

class CreateAndUpdateLesson extends React.Component {
	constructor(props) {
		super(props);
		const isANewLesson = this.props.location.pathname.includes("new");
		this.state = { isANewLesson };
	}

	render() {
		return (
			<div className="container">
				<h1>{this.state.isANewLesson ? "Create" : "Update"}</h1>
				<LessonFormContainer />
			</div>
		);
	}
}

export default CreateAndUpdateLesson;
