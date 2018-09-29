/**
 *
 * CardForm
 *
 */

import React from "react";
import PropTypes from "prop-types";
import GifIcon from "../../../resources/icons/baseline-gif-24px.svg";
import MicIcon from "../../../resources/icons/baseline-mic-24px.svg";
import ImageIcon from "../../../resources/icons/baseline-add_photo_alternate-24px.svg";

const CardForm = ({ setCardText, cardText }) => {
	let inputText = "";
	return (
		<div>
			<input
				defaultValue={cardText}
				type="text"
				className="form-control"
				ref={node => {
					inputText = node;
				}}
				onBlur={() => {
					setCardText(inputText.value);
				}}
			/>
			<div className="pull-right">
				<img src={MicIcon} alt="Mic icon" />
				<img src={ImageIcon} alt="icon" />
				<img src={GifIcon} alt="GIF Icon" />
			</div>
		</div>
	);
};

CardForm.propTypes = {
	setCardText: PropTypes.func.isRequired
};

export default CardForm;
