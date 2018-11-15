/**
 *
 * CardForm
 *
 */

import React from "react";
import PropTypes from "prop-types";
import GiphySearcher from "../GiphySearcher";
import GifIcon from "../../../resources/icons/baseline-gif-24px.svg";
import MicIcon from "../../../resources/icons/baseline-mic-24px.svg";
import ImageIcon from "../../../resources/icons/baseline-add_photo_alternate-24px.svg";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardText: this.props.cardText, gifSearcherActive: false };
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

  render() {
    let media;
    if (this.props.cardMedia) {
      switch (this.props.cardMedia.mediaType.name) {
        case "IMAGE":
          media = (
            <img
              src={this.props.cardMedia.source}
              style={{ maxWidth: "250px" }}
              className=" image-fluid "
              alt="concept"
            />
          );
          break;
        default:
          media = "";
      }
    } else {
      media = "";
    }
    return (
      <div className="text-center">
        {!this.state.gifSearcherActive ? (
          <div>
            <div className="col-md-2 text-center">{media}</div>
            <input
              id="cardText"
              value={this.state.cardText}
              type="text"
              className="form-control"
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
                this.props.setCardImage(gif.images.fixed_height.url);
                this.setState({ gifSearcherActive: false });
              }}
            />
          </div>
        )}

        <div className="pull-right">
          <img src={MicIcon} alt="Mic icon" />
          <label htmlFor={`cardImage${this.props.cardId}`}>
            <img src={ImageIcon} alt="icon" />
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
                const image = URL.createObjectURL(e.target.files[0]);
                this.setState({
                  cardImage: URL.createObjectURL(e.target.files[0])
                });
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
  cardText: PropTypes.string,
  cardId: PropTypes.string.isRequired
};

export default CardForm;
