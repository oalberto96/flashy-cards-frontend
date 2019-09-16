import React from "react";
import Card from "../../Play/Card";
import styles from "./styles.module.css";

const TrainLessonStatistics = props => {
  return (
    <div className="container">
      <div className="featureMargin">
        <h1 className={styles.title}>Score </h1>
        <button
          className="btn create-lesson-button"
          onClick={() => props.saveScore(props.lessonId, props.conceptsDone)}
        >
          Save
        </button>
        {props.conceptsWithScore.map(concept => (
          <div key={concept.id} className={`row ${styles.lesson}`}>
            <div className="col-md-5 col-6">
              <Card
                cardText={concept.cardA.text}
                cardMedia={concept.cardA.media}
              />
            </div>
            <div className="col-md-5 col-6">
              <Card
                cardText={concept.cardB.text}
                cardMedia={concept.cardB.media}
              />
            </div>
            <div className="col-md-2 col-12">
              <h3>Mistakes</h3>
              <div className={styles.score}>
                {concept.mistakes > 0 ? (
                  <span className={styles.negativeScore}>
                    {concept.mistakes}
                  </span>
                ) : (
                  <span className={styles.positiveScore}>
                    {concept.mistakes}
                  </span>
                )}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainLessonStatistics;
