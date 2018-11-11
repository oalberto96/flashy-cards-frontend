/**
 *
 * LessonListContainer actions
 *
 */

import { REQUEST_LESSONS, REQUEST_LESSONS_SUCCEEDED } from "./constants";

export const requestLessons = () => {
  return {
    type: REQUEST_LESSONS
  };
};

export const requestLessonsSucceeded = lessons => {
  return {
    type: REQUEST_LESSONS_SUCCEEDED,
    payload: {
      lessons
    }
  };
};
