/**
 *
 * CreateCollectionButton
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CreateCollectionButton = () => {
  return (
    <div className="button-container">
      <p>Blah Blah description description</p>
      <Link className="btn create-lesson-button" to="/lessons/new">
        Create new lesson
      </Link>
    </div>
  );
};

export default CreateCollectionButton;
