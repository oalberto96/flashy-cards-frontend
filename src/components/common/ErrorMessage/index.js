import React from "react";
import PropTypes from "prop-types";
import './style.module.css';

const ErrorMessage = ({ title, description }) => {
  return (
    <div className='msg'>
      <b>{title}</b> {description}
    
    </div>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ErrorMessage;
