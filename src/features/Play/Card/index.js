/**
 *
 * Card
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ cardText }) => {
  return <div className="card-container">{cardText}</div>;
};
Card.propTypes = {
  cardText: PropTypes.string.isRequired
};
export default Card;
