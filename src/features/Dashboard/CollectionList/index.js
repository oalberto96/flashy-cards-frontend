/**
 *
 * CollectionList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import FontAwesome from "react-fontawesome";

const CollectionList = ({ lists }) => {
  return (
    <div className="collection-list">
      <h1 className="title">My lists</h1>
      <ul className="list-group">
        {lists.map(list => {
          return (
            <li
              key={list.listId}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h1>{list.name}</h1>
                <p>{list.description}</p>
              </div>
              <span>
                <a className="icon-actions" href={`/list/${list.listId}`}>
                  <FontAwesome className="fa-play" name="fa-play" />
                </a>
                <a className="icon-actions" href={`/list/${list.listId}/edit`}>
                  <FontAwesome className="fa-pencil" name="fa-pencil" />
                </a>
                <a className="icon-actions" href="">
                  <FontAwesome className="fa-bar-chart" name="fa-bar-chart" />
                </a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CollectionList.propTypes = {
  lists: PropTypes.array.isRequired
};

export default CollectionList;
