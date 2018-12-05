import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ title, description }) => {
  return (
    <div>
      <b>{title}</b> {description}
    </div>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ErrorMessage;
