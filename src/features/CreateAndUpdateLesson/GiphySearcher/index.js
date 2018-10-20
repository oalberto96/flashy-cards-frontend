/**
 *
 * GiphySearcher
 *
 */

import React, { Component } from "react";
import PreviewGifList from "../PreviewGifList";

export default class GiphySearcher extends Component {
  state = {
    images: [],
    searchInput: ""
  };

  fetchGifs = () => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.searchInput
        .trim()
        .replace(" ", "+")}&api_key=aZXgpGiZO33bT84CH1nEpxZVAV0OyG4y&limit=8`
    )
      .then(response => response.json())
      .then(body => {
        this.setState({ images: body.data });
      });
  };

  handleInputSearch = event => {
    clearTimeout(this.timeout);
    this.setState({ searchInput: event.target.value }, () => {
      this.timeout = setTimeout(() => {
        this.fetchGifs();
      }, 1000);
    });
  };

  render() {
    return (
      <div>
        <div id="gif gallery" className="col-12">
          <PreviewGifList
            gifList={this.state.images}
            onSelectGIF={this.props.onSelectGIF}
          />
        </div>
        <input
          className="col-12 form-control"
          type="text"
          onChange={this.handleInputSearch}
          placeholder="Search a GIF"
        />
      </div>
    );
  }
}
