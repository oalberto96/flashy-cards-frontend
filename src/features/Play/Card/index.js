/**
 *
 * Card
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { CDN } from "../../../agent";
import * as mediaTypes from "../../../common/constants/mediaTypes";

const Card = ({ cardText, flipCard, cardMedia, cardAudio }) => {
  let media;
  console.log(cardMedia);
  if (cardMedia != null) {
    switch (cardMedia.mediaType.name) {
      case mediaTypes.IMAGE.name:
        media = (
          <img
            alt={cardText}
            src={CDN.getUrl(cardMedia.source)}
            className="img-fluid"
          />
        );
        break;
      case mediaTypes.GIF.name:
        media = (
          <img
            alt={cardText}
            src={CDN.getUrl(cardMedia.source)}
            className="img-fluid"
          />
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
        if (cardAudio) {
          let audio = new Audio(cardAudio);
          audio.play();
        }
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
