export const getLesson = state => {
  return state.lessonTraining.lesson;
};

export const getLessonId = state => {
  return state.lessonTraining.lesson.id;
};

export const getRateConcept = state => {
  return state.lessonTraining.rateConcept;
};

export const getShowAnswer = state => {
  return state.lessonTraining.showAnswer;
};

export const getQueue = state => {
  return state.lessonTraining.queue;
};

export const getConceptsDone = state => {
  return state.lessonTraining.conceptsDone;
};

export const getCurrentConceptCardA = state => {
  const queue = state.lessonTraining.queue.slice();
  const currentConcept = queue.shift();
  const lesson = state.lessonTraining.lesson;
  if (currentConcept && Object.keys(lesson).length > 1) {
    const concept = lesson.concepts.find(
      concept => concept.id === currentConcept.id
    );
    if (concept) {
      return concept.cardA;
    }
  }
  return null;
};

export const getCurrentConceptCardB = state => {
  const queue = state.lessonTraining.queue.slice();
  const currentConcept = queue.shift();
  const lesson = state.lessonTraining.lesson;
  if (currentConcept && Object.keys(lesson).length > 1) {
    const concept = lesson.concepts.find(
      concept => concept.id === currentConcept.id
    );
    if (concept) {
      return concept.cardB;
    }
  }
  return null;
};

export const getCurrentConceptId = state => {
  return state.lessonTraining.queue.length > 0
    ? state.lessonTraining.queue[0].id
    : null;
};

export const getConceptsWithScore = state => {
  const conceptsDoneCopy = state.lessonTraining.conceptsDone.slice();
  const concepts = state.lessonTraining.lesson.concepts.map(concept => {
    return {
      ...concept,
      mistakes: conceptsDoneCopy.find(
        conceptScore => conceptScore.id === concept.id
      ).mistakes
    };
  });
  return concepts;
};
