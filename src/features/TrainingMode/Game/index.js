import React from "react";
import Card from "../../Play/Card";
import FontAwesome from "react-fontawesome";
import * as styles from "./game.module.css";

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
    <div className="container featureMargin">
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
          <div className={styles.iconWrapper}>
            <h4>Did you guess?</h4>
            <FontAwesome
              onClick={() => props.rateConceptBad(props.currentConceptId)}
              className={`fa-thumbs-down ${styles.icon}`}
              name="fa-thumbs-down"
            />
            <FontAwesome
              onClick={() => props.rateConceptGood(props.currentConceptId)}
              className={`fa-thumbs-up ${styles.icon}`}
              name="fa-thumbs-up"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
