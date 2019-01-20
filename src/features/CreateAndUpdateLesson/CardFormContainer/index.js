import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CardForm from "../CardForm";
import * as actions from "../LessonFormContainer/actions";

export const CardFormContainer = props => {
  return <CardForm {...props} />;
};

export const mapStateToProps = (state, ownProps) => {
  return {
    cardId: `${ownProps.conceptId}${ownProps.cardType}`
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCardText: newText =>
      dispatch(
        actions.setCardText(ownProps.conceptId, newText, ownProps.cardType)
      ),
    setCardImage: newImage =>
      dispatch(
        actions.setCardImage(ownProps.conceptId, newImage, ownProps.cardType)
      )
  };
};

CardFormContainer.propTypes = {
  setCardText: PropTypes.func.isRequired,
  setCardImage: PropTypes.func.isRequired,
  conceptId: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormContainer);