/**
 *
 * LessonFormcontainer Reducer test
 *
 */

import reducer from "../reducer";
import * as actions from "../actions";
import * as mediaTypes from "../../../../common/constants/mediaTypes";

const exampleState = {
  id: 2,
  name: "xaxaa",
  description: "awdawdasd",
  audience: {
    id: 1,
    name: "PRIVATE"
  },
  concepts: [
    {
      id: 2,
      cardA: {
        text: "awdasd",
        media: null,
        audio: null
      },
      cardB: {
        text: "asdasd",
        media: null,
        audio: null
      }
    },
    {
      id: 3,
      cardA: {
        text: "awdasd",
        media: null,
        audio: null
      },
      cardB: {
        text: "asdasd",
        media: null,
        audio: null
      }
    }
  ],
  deletedConcepts: []
};

describe("LessonFormContainer reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      name: "",
      description: "",
      audience: { id: 1 },
      concepts: [],
      deletedConcepts: []
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle DELETE_CONCEPT", () => {
    const expectedState = {
      ...exampleState,
      concepts: [
        {
          id: 3,
          cardA: {
            text: "awdasd",
            media: null,
            audio: null
          },
          cardB: {
            text: "asdasd",
            media: null,
            audio: null
          }
        }
      ],
      deletedConcepts: [2]
    };
    expect(reducer(exampleState, actions.deleteConcept(2))).toEqual(
      expectedState
    );
  });

  it("Should handle ADD_CONCEPT_TO_NEW_LESSON", () => {
    const newConcept = {
      id: -1,
      cardA: {
        text: ""
      },
      cardB: {
        text: ""
      }
    };
    const expectedState = {
      ...exampleState,
      concepts: [...exampleState.concepts, newConcept]
    };
    expect(reducer(exampleState, actions.addConceptToNewLesson())).toEqual(
      expectedState
    );
  });

  it("should handle SET_CARD_IMAGE in a Card A ", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          return {
            id: 3,
            cardA: {
              text: "awdasd",
              media: { mediaType: mediaTypes.IMAGE, source: "image.png" },
              audio: null
            },
            cardB: {
              text: "asdasd",
              media: null,
              audio: null
            }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardImage(3, "image.png", "A"))
    ).toEqual(expectedState);
  });

  it("should handle SET_CARD_IMAGE in a Card B ", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          return {
            id: 3,
            cardA: {
              text: "awdasd",
              media: null,
              audio: null
            },
            cardB: {
              media: { mediaType: mediaTypes.IMAGE, source: "image.png" },
              text: "asdasd",
              audio: null
            }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardImage(3, "image.png", "B"))
    ).toEqual(expectedState);
  });
});
