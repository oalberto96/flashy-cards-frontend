/**
 *
 * common lessons utils
 *
 */

export const findLesson = (lessons, lessonId) => {
  return lessons.find(x => x.lessonId === lessonId);
};

export const generateConceptId = lastConcept => {
  if (lastConcept && lastConcept.id < 0) {
    return lastConcept.id - 1;
  }
  return -1;
};

export const lessonToApi = lesson => {
  return {
    ...lesson,
    concepts: lesson.concepts.map(concept => ({
      ...concept,
      card_a: {
        ...concept.cardA,
        media: concept.cardA.media
          ? { media_type: { id: 1 }, source: concept.cardA.media.source }
          : null
      },
      card_b: {
        ...concept.cardB,
        media: concept.cardB.media
          ? { media_type: { id: 1 }, source: concept.cardB.media.source }
          : null
      }
    }))
  };
};

export const ApiToLesson = lesson => {
  return {
    ...lesson,
    concepts: lesson.concepts.map(concept => ({
      id: concept.id,
      cardA: {
        ...concept.card_a,
        media: concept.card_a.media
          ? {
              mediaType: { ...concept.card_a.media.media_type },
              source: concept.card_a.media.source
            }
          : null
      },
      cardB: {
        ...concept.card_b,
        media: concept.card_b.media
          ? {
              mediaType: { ...concept.card_b.media.media_type },
              source: concept.card_b.media.source
            }
          : null
      }
    }))
  };
};
