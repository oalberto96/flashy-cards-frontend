/**
 *
 * PreviewGifList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const PreviewGifList = ({ gifList, onSelectGIF }) => {
  return (
    <div className="previewGifWrapper">
      {gifList.map(image => (
        <div
          className="previewGif"
          key={image.id}
          onClick={() => onSelectGIF(image)}
        >
          <img src={image.images.preview_gif.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

PreviewGifList.propTypes = {
  gifList: PropTypes.array.isRequired,
  onSelectGIF: PropTypes.func.isRequired
};

export default PreviewGifList;
