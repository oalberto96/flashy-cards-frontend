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
