/**
 *
 * PlayConcept
 *
 */

import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./styles.css";

class PlayConcept extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardFlipped: false };
  }

  componentDidUpdate({ cardA }) {
    if (cardA !== this.props.cardA) {
      this.setState({ cardFlipped: false });
    }
  }

  flipCard = () => {
    this.setState({ cardFlipped: !this.state.cardFlipped });
  };

  render() {
    let playConcept = <div>This concept is empty</div>;
    if (this.props.listLength > 0) {
      playConcept = (
        <div className="play-lesson-container">
          <p className="text-center">
            {this.props.index + 1}/{this.props.listLength}
          </p>
          <div className="container height-100-relative">
            <div className="slider row">
              <div className="col-1 col-md-2 control-wrapper ">
                <div
                  className="control-left"
                  onClick={this.props.prevCard}
                ></div>
              </div>
              <div className="col-10 col-md-8">
                <Card
                  flipCard={this.flipCard}
                  cardText={
                    this.state.cardFlipped
                      ? this.props.cardB.text
                      : this.props.cardA.text
                  }
                  cardMedia={
                    this.state.cardFlipped
                      ? this.props.cardB.media
                      : this.props.cardA.media
                  }
                  cardAudio={
                    this.state.cardFlipped
                      ? this.props.cardB.audio
                      : this.props.cardA.audio
                  }
                />
              </div>
              <div className="col-1 col-md-2 control-wrapper">
                <div
                  className="control-right"
                  onClick={this.props.nextCard}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return playConcept;
  }
}

PlayConcept.propTypes = {
  cardA: PropTypes.object.isRequired,
  cardB: PropTypes.object.isRequired
};

export default PlayConcept;
