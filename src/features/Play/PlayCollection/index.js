/**
 *
 * PlayCollection
 *
 */

import React from "react";
import PropTypes from "prop-types";

const PlayCollection = ({ collectionId }) => {
  return (
    <div className="container">
      <div className="row">Hello im a Component of list {collectionId}</div>
    </div>
  );
};

PlayCollection.propTypes = {
  collectionId: PropTypes.string.isRequired
};

export default PlayCollection;
