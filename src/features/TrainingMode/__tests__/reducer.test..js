/**
 *
 * Reducer Training Mode
 *
 */

import reducer from "../reducer";
import * as actions from "../actions";

const lesson = {
  id: 96,
  name: "awd",
  description: "ascsad",
  audience: {
    id: 1,
    name: "PRIVATE"
  },
  concepts: [
    {
      id: 40,
      cardA: {
        text: "xawda",
        media: {
          mediaType: {
            id: 1,
            name: "IMAGE"
          },
          source: "cardimage1548992206.091635.png"
        },
        audio: null
      },
      cardB: {
        text: "dasdwad",
        media: null,
        audio: null
      }
    },
    {
      id: 41,
      cardA: {
        text: "tes",
        media: null,
        audio: null
      },
      cardB: {
        text: "xas",
        media: null,
        audio: null
      }
    }
  ]
};

describe("Training Mode Reducer ", () => {
  it("should return the initial state", () => {
    const initialState = {
      lesson: {},
      rateConcept: false,
      showAnswer: false,
      queue: [],
      conceptsDone: []
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle a requestLessonToTrainingSuccess ", () => {
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }, { id: 41, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: false
    };
    expect(
      reducer(undefined, actions.requestLessonToTrainSuccess(lesson))
    ).toEqual(expectedState);
  });

  it("should handle a showAnswer", () => {
    const state = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: false
    };
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: true
    };
    expect(reducer(state, actions.showAnswer())).toEqual(expectedState);
  });

  it("should handle a rateConcept", () => {
    const state = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: false,
      rateConcept: false
    };
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: false,
      rateConcept: true
    };
    expect(reducer(state, actions.rateConcept(40))).toEqual(expectedState);
  });

  it("should handle RATE_CONCEPT_GOOD", () => {
    const state = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }, { id: 41, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: true,
      rateConcept: true
    };
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 41, mistakes: 0 }],
      conceptsDone: [{ id: 40, mistakes: 0 }],
      showAnswer: false,
      rateConcept: false
    };
    expect(reducer(state, actions.rateConceptGood(40))).toEqual(expectedState);
  });

  it("should handle RATE_CONCEPT_BAD", () => {
    const state = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }, { id: 41, mistakes: 0 }],
      conceptsDone: [],
      showAnswer: true,
      rateConcept: true
    };
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 41, mistakes: 0 }, { id: 40, mistakes: 1 }],
      conceptsDone: [],
      showAnswer: false,
      rateConcept: false
    };
    expect(reducer(state, actions.rateConceptBad(40))).toEqual(expectedState);
  });
});
