/**
 *
 * TextInput
 *
 */

import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ divClassName, label, inputClassName, inputId }) => {
	return (
		<div className={divClassName}>
			<label htmlFor="lessonName">{label}</label>
			<input type="text" className={inputClassName} id={inputId} />
		</div>
	);
};

TextInput.propTypes = {
	divClassName: PropTypes.string,
	label: PropTypes.string,
	inputClassName: PropTypes.string,
	inputId: PropTypes.string
};

export default TextInput;
