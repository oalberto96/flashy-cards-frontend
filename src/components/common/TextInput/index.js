/**
 *
 * TextInput
 *
 */

import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  divClassName,
  label,
  inputClassName,
  inputId,
  onBlur,
  onChange,
  defaultValue,
  value,
  inputType
}) => {
  return (
    <div className={divClassName}>
      <label htmlFor="lessonName">{label}</label>
      <input
        id={inputId}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        type={inputType ? inputType : "text"}
        className={inputClassName}
        onBlur={onBlur}
      />
    </div>
  );
};

TextInput.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  inputId: PropTypes.string,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  inputType: PropTypes.string
};

export default TextInput;
