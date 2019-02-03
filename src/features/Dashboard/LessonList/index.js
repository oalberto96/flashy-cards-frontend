/**
 *
 * LessonList
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import FontAwesome from "react-fontawesome";
import Modal from "../../../components/common/Modal";

const LessonList = ({
  lessons,
  confirmDelete,
  setVisibleConfirmDelete,
  setInvisibleConfirmDelete,
  requestDeleteLesson
}) => {
  return (
    <div className="collection-list">
      <h1 className={styles.title}>My lists</h1>
      <ul className="list-group">
        {lessons.map(lesson => {
          return (
            <li
              key={lesson.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h1>{lesson.name}</h1>
                <p>{lesson.description}</p>
              </div>

              <span>
                <Link
                  className={styles.iconActions}
                  to={`/lessons/${lesson.id}`}
                >
                  <FontAwesome className="fa-eye" name="fa-play" />
                </Link>
                <Link
                  className={styles.iconActions}
                  to={`/lessons/${lesson.id}/training/`}
                >
                  <FontAwesome className="fa-play" name="fa-play" />
                </Link>
                <Link
                  className={styles.iconActions}
                  to={`/lessons/${lesson.id}/edit`}
                >
                  <FontAwesome className="fa-pencil" name="fa-pencil" />
                </Link>
                <Link className={styles.iconActions} to="">
                  <FontAwesome className="fa-bar-chart" name="fa-bar-chart" />
                </Link>
              </span>
              <div className="dropdown show">
                <a
                  className={`btn  ${styles.optionsIcon}`}
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#0"
                >
                  <i className="fa fa-ellipsis-v " />
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a
                    href="#0"
                    className="dropdown-item"
                    onClick={() => setVisibleConfirmDelete(lesson.id)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {confirmDelete && (
        <Modal
          cancel={setInvisibleConfirmDelete}
          accept={requestDeleteLesson}
        />
      )}
    </div>
  );
};

LessonList.propTypes = {
  lessons: PropTypes.array.isRequired,
  confirmDelete: PropTypes.bool.isRequired,
  setVisibleConfirmDelete: PropTypes.func.isRequired
};

export default LessonList;
