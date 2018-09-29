/**
 *
 * ConceptList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import CardForm from "./CardForm";

const ConceptList = ({ concepts, setCardText }) => {
	return concepts.map(concept => (
		<div key={concept.conceptId} className="form-group">
			<div className="row">
				<div className="col-md-6">
					<CardForm
						cardText={concept.cardA.text}
						setCardText={cardText =>
							setCardText(concept.conceptId, cardText, "A")
						}
					/>
				</div>
				<div className="col-md-6">
					<CardForm
						cardText={concept.cardB.text}
						setCardText={cardText =>
							setCardText(concept.conceptId, cardText, "B")
						}
					/>
				</div>
			</div>
		</div>
	));
};

ConceptList.propTypes = {
	concepts: PropTypes.array.isRequired,
	setCardText: PropTypes.func.isRequired
};

export default ConceptList;
