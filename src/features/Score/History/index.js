import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const History = props => {
  return (
    <div className={styles.historyContainer}>
      <div className="row">
        <div className="col-6">Date</div>
        <div className="col-6 text-right">Mistakes</div>
      </div>
      {props.score.map(score => (
        <div className={`row ${styles.historyRow}`}>
          <div className="col-6">
            <b>{score.date.format("MM/DD/YYYY")}</b>
          </div>
          <div className="col-6 text-right">{score.mistakes}</div>
        </div>
      ))}
    </div>
  );
};

History.propTypes = {};

export default History;
