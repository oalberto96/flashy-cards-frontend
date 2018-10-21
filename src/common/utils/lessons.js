/**
 *
 * common lessons utils
 *
 */

export const findLesson = (lessons, lessonId) => {
  return lessons.find(x => x.lessonId === lessonId);
};
