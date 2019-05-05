/**
 *
 * Card
 *
 */

import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles.module.css";
import { CDN } from "../../../agent";
import * as mediaTypes from "../../../common/constants/mediaTypes";

class Card extends React.Component {
  state = {
    flipped: false
  };
  render() {
    let cardText, flipCard, cardMedia, cardAudio;
    ({ cardText, flipCard, cardMedia, cardAudio } = this.props);
    let media;
    if (cardMedia != null) {
      switch (cardMedia.mediaType.name) {
        case mediaTypes.IMAGE.name:
        case mediaTypes.GIF.name:
          media = (
            <img
              alt={cardText}
              src={CDN.getUrl(cardMedia.source)}
              className={`img-fluid ${styles.cardImage}`}
            />
          );
          break;
        default:
          media = undefined;
      }
    }
    let flipCardContainerClass = this.state.flipped
      ? styles.flipContainerCard
      : "";
    let flipCardClass = this.state.flipped ? styles.flipCard : "";
    return (
      <div className={`${styles.cardContainer} ${flipCardContainerClass}`}>
        <div
          className={`${styles.card} ${flipCardClass}`}
          onClick={() => {
            if (cardAudio) {
              let audio = new Audio(cardAudio);
              audio.play();
            }
            if (flipCard) {
              this.setState({ flipped: !this.state.flipped }, () =>
                setTimeout(() => flipCard(), 200)
              );
            }
          }}
        >
          {media}
          <div className={styles.cardTextContainer}>{cardText}</div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  flipCard: PropTypes.func,
  cardMedia: PropTypes.object,
  cardAudio: PropTypes.string
};
export default Card;
