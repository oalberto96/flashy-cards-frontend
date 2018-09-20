/**
 *
 * CollectionList
 *
 */

import React from "react";
import { Link } from "react-router-dom";
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
                <Link className="icon-actions" to={`/list/${list.listId}`}>
                  <FontAwesome className="fa-play" name="fa-play" />
                </Link>
                <Link className="icon-actions" to={`/list/${list.listId}/edit`}>
                  <FontAwesome className="fa-pencil" name="fa-pencil" />
                </Link>
                <Link className="icon-actions" to="">
                  <FontAwesome className="fa-bar-chart" name="fa-bar-chart" />
                </Link>
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
