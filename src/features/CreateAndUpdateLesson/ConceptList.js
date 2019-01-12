/**
 *
 * ConceptList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import CardForm from "./CardForm";

const ConceptList = ({ concepts, setCardText, setCardImage, deleteConcept }) => {
  return concepts.map(concept => (
    <div key={concept.id} className="form-group">
      <div className="close-button" onClick={() => deleteConcept(concept.id)}>
        X
      </div>
      <div className="row">
        <div className="col-md-6">
          <CardForm
            cardId={`${concept.id}A`}
            cardText={concept.cardA.text}
            cardMedia={concept.cardA.media}
            setCardText={cardText => setCardText(concept.id, cardText, "A")}
            setCardImage={cardImage => {
              setCardImage(concept.id, cardImage, "A");
            }}
          />
        </div>
        <div className="col-md-6">
          <CardForm
            cardId={`${concept.id}B`}
            cardText={concept.cardB.text}
            cardMedia={concept.cardB.media}
            setCardText={cardText => setCardText(concept.id, cardText, "B")}
            setCardImage={cardImage => {
              setCardImage(concept.id, cardImage, "B");
            }}
          />
        </div>
      </div>
    </div>
  ));
};

ConceptList.propTypes = {
  concepts: PropTypes.array.isRequired,
  setCardText: PropTypes.func.isRequired,
  setCardImage: PropTypes.func.isRequired,
  deleteConcept: PropTypes.func.isRequired
};

export default ConceptList;
