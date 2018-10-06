/**
 *
 * ConceptList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import CardForm from "./CardForm";

const ConceptList = ({ concepts, setCardText, setCardImage }) => {
  return concepts.map(concept => (
    <div key={concept.conceptId} className="form-group">
      <div className="row">
        <div className="col-md-6">
          <CardForm
            cardId={`${concept.conceptId}A`}
            cardText={concept.cardA.text}
            cardMedia={concept.cardA.media}
            setCardText={cardText =>
              setCardText(concept.conceptId, cardText, "A")
            }
            setCardImage={cardImage => {
              setCardImage(concept.conceptId, cardImage, "A");
            }}
          />
        </div>
        <div className="col-md-6">
          <CardForm
            cardId={`${concept.conceptId}B`}
            cardText={concept.cardB.text}
            cardMedia={concept.cardB.media}
            setCardText={cardText =>
              setCardText(concept.conceptId, cardText, "B")
            }
            setCardImage={cardImage => {
              setCardImage(concept.conceptId, cardImage, "B");
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
  setCardImage: PropTypes.func.isRequired
};

export default ConceptList;
