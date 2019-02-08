/**
 *
 * ConceptList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import CardFormContainer from "./CardFormContainer";

const ConceptList = ({ concepts, deleteConcept }) => {
  return concepts.map(concept => (
    <div key={concept.id} className="form-group">
      <div className="close-button" onClick={() => deleteConcept(concept.id)}>
        X
      </div>
      <div className="row">
        <div className="col-md-6">
          <CardFormContainer
            conceptId={concept.id}
            cardType="A"
            cardText={concept.cardA.text}
            cardMedia={concept.cardA.media}
            cardAudio={concept.cardB.audio}
          />
        </div>
        <div className="col-md-6">
          <CardFormContainer
            conceptId={concept.id}
            cardType="B"
            cardText={concept.cardB.text}
            cardMedia={concept.cardB.media}
            cardAudio={concept.cardB.audio}
          />
        </div>
      </div>
    </div>
  ));
};

ConceptList.propTypes = {
  concepts: PropTypes.array.isRequired,
  deleteConcept: PropTypes.func.isRequired
};

export default ConceptList;
