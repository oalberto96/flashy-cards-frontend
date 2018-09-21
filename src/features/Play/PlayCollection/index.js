/**
 *
 * PlayCollection
 *
 */

import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./styles.css";

const PlayCollection = ({ collectionId }) => {
  return (
    <div className="play-collection-container">
      <div className="container height-100-relative">
        <div className="slider row height-100-relative">
          <div className="col-1 col-md-2">{"<"}</div>
          <div className="col-10 col-md-8">
            <Card />
          </div>
          <div className="col-1 col-md-2">{">"}</div>
        </div>
      </div>
    </div>
  );
};

PlayCollection.propTypes = {
  collectionId: PropTypes.string.isRequired
};

export default PlayCollection;
