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
	defaultValue
}) => {
	let text;
	return (
		<div className={divClassName}>
			<label htmlFor="lessonName">{label}</label>
			<input
				defaultValue={defaultValue}
				type="text"
				ref={node => (text = node)}
				className={inputClassName}
				id={inputId}
				onBlur={() => onBlur(text.value)}
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
	defaultValue: PropTypes.string
};

export default TextInput;
