/**
 *
 * TextAreaInput
 *
 */

import React from "react";
import PropTypes from "prop-types";

const TextAreaInput = ({ divClassName, label, inputClassName, inputId }) => {
	return (
		<div className={divClassName}>
			<label htmlFor="lessonName">{label}</label>
			<textarea type="text" className={inputClassName} id={inputId} />
		</div>
	);
};

TextAreaInput.propTypes = {
	divClassName: PropTypes.string,
	label: PropTypes.string,
	inputClassName: PropTypes.string,
	inputId: PropTypes.string
};

export default TextAreaInput;
