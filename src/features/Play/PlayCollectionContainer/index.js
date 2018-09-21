/**
 *
 * PlayCollectionContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayCollection from "../PlayCollection";

class PlayCollectionContainer extends React.Component {
  static propTypes = {
    collectionId: PropTypes.string.isRequired
  };
  render() {
    return <PlayCollection {...this.props} />;
  }
}

const mapStateToProps = () => (state, ownProps) => {
  return {
    collectionId: ownProps.match.params.collectionId
  };
};

export default connect(mapStateToProps)(PlayCollectionContainer);
