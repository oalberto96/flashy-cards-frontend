/**
 *
 * CollectionListContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CollectionList from "../CollectionList";

class CollectionListContainer extends React.Component {
  static propTypes = {
    lists: PropTypes.array.isRequired
  };
  render() {
    return <CollectionList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists
  };
};

export default connect(mapStateToProps)(CollectionListContainer);
