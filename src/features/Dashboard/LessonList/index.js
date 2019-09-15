/**
 *
 * LessonList
 *
 */

import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import FontAwesome from "react-fontawesome";
import Modal from "../../../components/common/Modal";
import Lesson from "../Lesson";

const LessonList = ({
  lessons,
  confirmDelete,
  setVisibleConfirmDelete,
  setInvisibleConfirmDelete,
  requestDeleteLesson,
  reverseList
}) => {
  return (
    <div className="collection-list">
      <h1 className={styles.title}>My lists</h1>
      <div
        className={`text-right ${styles.orderButton}`}
        onClick={() => reverseList()}
      >
        <span></span>
        <FontAwesome className="fa-sort" name="fa-sort"></FontAwesome>
        Order
      </div>
      <ul className="list-group">
        {lessons.map(lesson => {
          return <Lesson key={lesson.id} {...lesson} />;
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
