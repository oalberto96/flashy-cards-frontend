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
  defaultValue
}) => {
  let text;
  return (
    <div className={divClassName}>
      <label htmlFor="lessonName">{label}</label>
      <textarea
        defaultValue={defaultValue}
        ref={node => (text = node)}
        type="text"
        className={inputClassName}
        id={inputId}
        onBlur={() => onBlur(text.value)}
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
  defaultValue: PropTypes.string
};

export default TextAreaInput;
