/**
 *
 * Card
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ cardText, flipCard, cardMedia, cardAudio }) => {
  let media;
  if (cardMedia !== undefined) {
    switch (cardMedia.type) {
      case "IMAGE":
        media = (
          <img alt={cardText} src={cardMedia.source} className="img-fluid" />
        );
        break;
      default:
        media = undefined;
    }
  }
  return (
    <div
      className="card-container"
      onClick={() => {
        let audio = new Audio(cardAudio);
        audio.play();
        flipCard();
      }}
    >
      {cardText}
      {media}
    </div>
  );
};
Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  flipCard: PropTypes.func.isRequired,
  cardMedia: PropTypes.object,
  cardAudio: PropTypes.string
};
export default Card;
