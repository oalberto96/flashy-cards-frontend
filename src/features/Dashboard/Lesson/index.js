import React from "react";
import FontAwesome from "react-fontawesome";
import { Route } from "react-router-dom";
import * as styles from "./lesson.module.css";

const Lesson = ({ name, description, id, context }) => {
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => history.push(`/lessons/${id}/menu`)}
          className={`${styles.container} row`}
        >
          <div className="col-md-10 col-xs-10">
            <h2 className={styles.title}>{name}</h2>
            <p>{description}</p>
          </div>
          <div className={`col-md-2 col-xs-2 ${styles.iconWrapper}`}>
            <FontAwesome
              className={`fa-play-circle ${styles.icon}`}
              name="fa-play-circle"
            />
          </div>
        </div>
      )}
    />
  );
};

export default Lesson;
