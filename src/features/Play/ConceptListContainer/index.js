/**
 *
 * ConceptListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayConcept from "../PlayConcept";

class ConceptListContainer extends React.Component {
	state = { index: 0 };

	nextCard = () => {
		if (this.state.index + 1 < this.props.concepts.length) {
			this.setState({ index: this.state.index + 1 });
		}
	};

	prevCard = () => {
		if (this.state.index - 1 >= 0) {
			this.setState({ index: this.state.index - 1 });
		}
	};

	render() {
		return this.props.concepts.length > 0 ? (
			<PlayConcept
				listLength={this.props.concepts.length}
				index={this.state.index}
				nextCard={this.nextCard}
				prevCard={this.prevCard}
				cardA={this.props.concepts[this.state.index].cardA}
				cardB={this.props.concepts[this.state.index].cardB}
			/>
		) : (
			<p>This lesson is empty</p>
		);
	}
}
const mapStateToProps = () => (state, ownProps) => {
	const lessonId = ownProps.match.params.lessonId;
	const lesson = state.lessons.find(
		lesson => lesson.lessonId.toString() === lessonId
	);
	return {
		concepts: lesson.concepts,
		lessonId
	};
};

export default connect(mapStateToProps)(ConceptListContainer);
