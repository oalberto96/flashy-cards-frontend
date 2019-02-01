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
    }
  ]
};

describe("Training Mode Reducer ", () => {
  it("should return the initial state", () => {
    const initialState = {};
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle a requestLessonToTrainingSuccess ", () => {
    const expectedState = {
      lesson: {
        ...lesson,
        concepts: lesson.concepts.map(concept => ({ ...concept }))
      },
      queue: [{ id: 40, mistakes: 0 }],
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
    // expect(reducer(state, actions.rateConcept(40))).toEqual()
  });
});
