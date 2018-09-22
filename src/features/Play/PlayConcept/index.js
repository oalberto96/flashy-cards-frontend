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
    return (
      <div className="play-lesson-container">
        <div className="container height-100-relative">
          <div className="slider row height-100-relative">
            <div className="col-1 col-md-2" onClick={this.props.prevCard}>
              {"<"}
            </div>
            <div className="col-10 col-md-8">
              <Card
                flipCard={this.flipCard}
                cardText={
                  this.state.cardFlipped
                    ? this.props.cardB.text
                    : this.props.cardA.text
                }
              />
            </div>
            <div className="col-1 col-md-2" onClick={this.props.nextCard}>
              {">"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayConcept.propTypes = {
  cardA: PropTypes.object.isRequired,
  cardB: PropTypes.object.isRequired
};

export default PlayConcept;
