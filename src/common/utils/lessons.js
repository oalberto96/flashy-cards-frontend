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
    deleted_concepts: lesson.deletedConcepts,
    concepts: lesson.concepts.map(concept => ({
      ...concept,
      card_a: {
        ...concept.cardA,
        media: concept.cardA.media
          ? {
              media_type: { ...concept.cardA.media.mediaType },
              source: concept.cardA.media.imageFile
                ? ""
                : concept.cardA.media.source,
              image_file: concept.cardA.media.imageFile
            }
          : null
      },
      card_b: {
        ...concept.cardB,
        media: concept.cardB.media
          ? {
              media_type: { ...concept.cardB.media.mediaType },
              source: concept.cardB.media.imageFile
                ? ""
                : concept.cardB.media.source,
              image_file: concept.cardB.media.imageFile
            }
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
