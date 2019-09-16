import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const GameStatus = props => {
  let doneRemaining = props.currentPosition;
  const bars = Array(props.totalCards)
    .fill(null)
    .map((bar, index) => {
      if (doneRemaining > 0) {
        bar = <div key={index} className={`col ${styles.barDone}`}></div>;
        doneRemaining -= 1;
        return bar;
      }
      return <div key={index} className={`col ${styles.bar}`}></div>;
    });
  return <div className={`row ${styles.barStatus}`}>{bars}</div>;
};

GameStatus.propTypes = {
  currentPosition: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired
};

export default GameStatus;
