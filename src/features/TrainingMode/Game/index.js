import React from "react";
import Card from "../../Play/Card";

const Game = props => {
  let answer = null;
  if (props.isAnswerVisible && props.cardB) {
    answer = (
      <Card
        cardText={props.cardB.text}
        cardMedia={props.cardB.media}
        cardAudio={props.cardB.media}
      />
    );
  } else {
    answer = (
      <button onClick={() => props.showAnswer() && props.rateConcept()}>
        ...
      </button>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="col-6 col-md-6">
          <Card
            cardText={props.cardA.text}
            cardMedia={props.cardA.media}
            cardAudio={props.cardA.audio}
          />
        </div>
        <div className="col-6 col-md-6">{answer}</div>
      </div>
      {props.isRatingConcept && (
        <div className="row">
          <button onClick={() => props.rateConceptGood(props.currentConceptId)}>
            Bien
          </button>
          <button onClick={() => props.rateConceptBad(props.currentConceptId)}>
            Mal
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
