/**
 *
 * Card
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ cardText, flipCard }) => {
  return (
    <div className="card-container" onClick={flipCard}>
      {cardText}
    </div>
  );
};
Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  flipCard: PropTypes.func.isRequired
};
export default Card;
