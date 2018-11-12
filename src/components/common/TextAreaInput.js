/**
 *
 * TextAreaInput
 *
 */

import React from "react";
import PropTypes from "prop-types";

const TextAreaInput = ({
  divClassName,
  label,
  inputClassName,
  inputId,
  onBlur,
  defaultValue,
  value,
  onChange
}) => {
  return (
    <div className={divClassName}>
      <label htmlFor="lessonName">{label}</label>
      <textarea
        defaultValue={defaultValue}
        type="text"
        className={inputClassName}
        id={inputId}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextAreaInput.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  inputId: PropTypes.string,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextAreaInput;
