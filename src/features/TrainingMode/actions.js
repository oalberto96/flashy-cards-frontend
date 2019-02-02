import * as types from "./constants";

export const requestLessonToTrain = lessonId => {
  return {
    type: types.REQUEST_LESSON_TO_TRAIN,
    payload: {
      lessonId
    }
  };
};

export const requestLessonToTrainSuccess = lesson => {
  return {
    type: types.REQUEST_LESSON_TO_TRAIN_SUCCESS,
    payload: { lesson }
  };
};

export const showAnswer = () => {
  return {
    type: types.SHOW_ANSWER
  };
};

export const rateConcept = conceptId => {
  return {
    type: types.RATE_CONCEPT,
    payload: { conceptId }
  };
};

export const rateConceptGood = conceptId => {
  return {
    type: types.RATE_CONCEPT_GOOD,
    payload: { conceptId }
  };
};

export const rateConceptBad = conceptId => {
  return {
    type: types.RATE_CONCEPT_BAD,
    payload: { conceptId }
  };
};

export const saveTrainingScore = (lessonId, concepts) => {
  return {
    type: types.SAVE_TRAINING_SCORE,
    payload: { lessonId, concepts }
  };
};

export const saveTrainingScoreSuccess = () => {
  return {
    type: types.SAVE_TRAINING_SCORE
  };
};
