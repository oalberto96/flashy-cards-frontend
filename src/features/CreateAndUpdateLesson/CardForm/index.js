/**
 *
 * CardForm
 *
 */

import React from "react";
import PropTypes from "prop-types";
import GiphySearcher from "../GiphySearcher";
import { CDN } from "../../../agent";
import styles from "./styles.module.css";
import * as mediaTypes from "../../../common/constants/mediaTypes";
import NoImage from "../../../resources/common/no-image.png";
import GifIcon from "../../../resources/icons/baseline-gif-24px.svg";
import MicIcon from "../../../resources/icons/baseline-mic-24px.svg";
import ImageIcon from "../../../resources/icons/baseline-add_photo_alternate-24px.svg";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardText: this.props.cardText,
      gifSearcherActive: false,
      cardAudio: this.props.cardAudio || ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.cardText !== prevProps.cardText) {
        this.setState({ cardText: this.props.cardText });
      }
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  audioInput = () => {
    return (
      <div>
        <input
          id="cardAudio"
          value={this.state.cardAudio}
          type="text"
          className="form-control"
          onChange={this.handleInputChange}
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.setCardAudio(this.state.cardAudio);
            this.setState({ showAudioInput: false });
          }}
        >
          Save audio
        </button>
      </div>
    );
  };

  render() {
    let media;
    if (this.props.cardMedia) {
      switch (this.props.cardMedia.mediaType.name) {
        case mediaTypes.IMAGE.name:
          media = (
            <img
              src={CDN.getUrl(this.props.cardMedia.source)}
              style={{ maxWidth: "250px" }}
              className=" image-fluid "
              alt="concept"
            />
          );
          break;
        case mediaTypes.GIF.name:
          media = (
            <img
              src={this.props.cardMedia.source}
              style={{ maxWidth: "250px" }}
              className="image-fluid"
              alt="concept GIF"
            />
          );
          break;
        default:
          media = media = (
            <img
              src={NoImage}
              style={{ maxWidth: "250px" }}
              className="image-fluid"
              alt="no image"
            />
          );
      }
    } else {
      media = media = (
        <img
          src={NoImage}
          style={{ maxWidth: "250px" }}
          className="image-fluid"
          alt="no image"
        />
      );
    }
    return (
      <div className="text-center">
        {!this.state.gifSearcherActive ? (
          <div>
            <div className={`text-center ${styles.mediaWrapper}`}>{media}</div>
            <input
              id="cardText"
              value={this.state.cardText}
              type="text"
              placeholder="Description"
              className={`form-control ${styles.input}`}
              onChange={this.handleInputChange}
              onBlur={() => {
                this.props.setCardText(this.state.cardText);
              }}
            />
          </div>
        ) : (
          <div className="gifSearcherContainer">
            <GiphySearcher
              onSelectGIF={gif => {
                this.props.setCardGif(gif.images.fixed_height.url);
                this.setState({ gifSearcherActive: false });
              }}
            />
          </div>
        )}

        {this.state.showAudioInput && this.audioInput()}

        <div className="pull-right">
          <img
            src={MicIcon}
            alt="Mic icon"
            onClick={() => {
              this.setState({ showAudioInput: true });
            }}
          />
          <label htmlFor={`cardImage${this.props.cardId}`}>
            <img src={ImageIcon} alt="imageicon" />
          </label>
          <img
            src={GifIcon}
            alt="GIF Icon"
            onClick={() =>
              this.setState({
                gifSearcherActive: !this.state.gifSearcherActive
              })
            }
          />
        </div>
        <div className="d-none">
          <input
            ref={node => {
              this.image = node;
            }}
            onChange={e => {
              if (e.target.files.length > 0) {
                const image = e.target.files[0];
                this.props.setCardImage(image);
              }
            }}
            type="file"
            id={`cardImage${this.props.cardId}`}
          />
        </div>
      </div>
    );
  }
}

CardForm.propTypes = {
  setCardText: PropTypes.func.isRequired,
  setCardImage: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
  cardText: PropTypes.string,
  cardMedia: PropTypes.object
};

export default CardForm;
