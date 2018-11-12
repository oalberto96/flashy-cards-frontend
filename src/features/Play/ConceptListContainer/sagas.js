/**
 *
 * ConceptListContainer sagas
 *
 */

import { takeEvery, put, call } from "redux-saga/effects";
import { Lessons } from "../../../agent";
import { loadLessonToPlaySuccess } from "./actions";
import { LOAD_LESSON_TO_PLAY } from "./constants";

function APIToLesson(lesson) {
  return {
    ...lesson,
    concepts: lesson.concepts.map(concept => ({
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
}

function fetchLessonWithConcepts(lessonId) {
  return Lessons.withConcepts(lessonId).then(response =>
    APIToLesson(response.data)
  );
}

function* loadLessonToPlay(action) {
  const lesson = yield call(fetchLessonWithConcepts, action.payload.lessonId);
  if (lesson) {
    lesson.index = 0;
    yield put(loadLessonToPlaySuccess(lesson));
  }
}

export default function* defaultSaga() {
  yield takeEvery(LOAD_LESSON_TO_PLAY, loadLessonToPlay);
}
