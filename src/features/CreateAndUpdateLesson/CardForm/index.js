/**
 *
 * CardForm
 *
 */

import React from "react";
import PropTypes from "prop-types";
import GifIcon from "../../../resources/icons/baseline-gif-24px.svg";
import MicIcon from "../../../resources/icons/baseline-mic-24px.svg";
import ImageIcon from "../../../resources/icons/baseline-add_photo_alternate-24px.svg";

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardText: this.props.cardText };
    if (this.props.cardMedia) {
      if (this.props.cardMedia.type === "IMAGE") {
        this.state.cardImage = this.props.cardMedia.source;
      }
    }
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
    return (
      <div className="text-center">
        {this.state.cardImage && (
          <div className="col-md-2 text-center">
            <img
              src={this.state.cardImage}
              style={{ maxWidth: "250px" }}
              className=" image-fluid "
              alt="concept"
            />
          </div>
        )}
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
        <div className="pull-right">
          <img src={MicIcon} alt="Mic icon" />
          <label htmlFor={`cardImage${this.props.cardId}`}>
            <img src={ImageIcon} alt="icon" />
          </label>
          <img src={GifIcon} alt="GIF Icon" />
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
