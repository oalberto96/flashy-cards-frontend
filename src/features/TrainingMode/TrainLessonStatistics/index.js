import React from "react";
import Card from "../../Play/Card";

const TrainLessonStatistics = props => {
  return (
    <div>
      <div>
        <h1>Statistics</h1>
        {props.conceptsWithScore.map(concept => (
          <div key={concept.id} className="row">
            <div className="col-3">
              <Card
                cardText={concept.cardA.text}
                cardMedia={concept.cardA.media}
              />
            </div>
            <div className="col-3">
              <Card
                cardText={concept.cardB.text}
                cardMedia={concept.cardB.media}
              />
            </div>
            <div className="col-6">Mistakes: {concept.mistakes}</div>
          </div>
        ))}
        <button
          onClick={() => props.saveScore(props.lessonId, props.conceptsDone)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TrainLessonStatistics;
