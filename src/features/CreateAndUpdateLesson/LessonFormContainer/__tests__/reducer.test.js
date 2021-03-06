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
        text: "card A",
        media: { mediaType: mediaTypes.IMAGE, source: "imageA.png" },
        audio: null
      },
      cardB: {
        text: "card B",
        media: { mediaType: mediaTypes.IMAGE, source: "imageB.png" },
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
            text: "card A",
            media: { mediaType: mediaTypes.IMAGE, source: "imageA.png" },
            audio: null
          },
          cardB: {
            text: "card B",
            media: { mediaType: mediaTypes.IMAGE, source: "imageB.png" },
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

  it("should handle SET_CARD_IMAGE_SUCCESS in a Card A ", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          //
          return {
            id: 3,
            cardA: {
              text: "card A",
              media: {
                mediaType: mediaTypes.IMAGE,
                source: "image.png",
                imageFile: "image.png"
              },
              audio: null
            },
            cardB: {
              text: "card B",
              media: { mediaType: mediaTypes.IMAGE, source: "imageB.png" },
              audio: null
            }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardImageSuccess(3, "A", "image.png"))
    ).toEqual(expectedState);
  });

  // it("should handle SET_CARD_IMAGE in a Card B ", () => {
  //   const expectedState = {
  //     ...exampleState,
  //     concepts: exampleState.concepts.map(concept => {
  //       if (concept.id === 3) {
  //         return {
  //           id: 3,
  //           cardA: {
  //             text: "card A",
  //             media: { mediaType: mediaTypes.IMAGE, source: "imageA.png" },
  //             audio: null
  //           },
  //           cardB: {
  //             text: "card B",
  //             media: { mediaType: mediaTypes.IMAGE, source: "image.png" },
  //             audio: null
  //           }
  //         };
  //       }
  //       return concept;
  //     })
  //   };
  //   expect(
  //     reducer(exampleState, actions.setCardImage(3, "image.png", "B"))
  //   ).toEqual(expectedState);
  // });

  it("should handle SET_CARD_TEXT in Card A", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          return {
            ...concept,
            cardA: { ...concept.cardA, text: "Super card A" }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardText(3, "Super card A", "A"))
    ).toEqual(expectedState);
  });

  it("should handle SET_CARD_TEXT in Card B", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          return {
            ...concept,
            cardB: {
              ...concept.cardB,
              text: "Super card B"
            }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardText(3, "Super card B", "B"))
    ).toEqual(expectedState);
  });

  it("should handle CHANGE_NEW_LESSON_NAME", () => {
    const expectedState = { ...exampleState, name: "New name" };
    expect(
      reducer(exampleState, actions.changeNewLessonName("New name"))
    ).toEqual(expectedState);
  });

  it("should handle CHANGE_NEW_LESSON_DESCRIPTION", () => {
    const expectedState = { ...exampleState, description: "New description" };
    expect(
      reducer(
        exampleState,
        actions.changeNewLessonDescription("New description")
      )
    ).toEqual(expectedState);
  });

  it("should handle SET_CARD_GIF", () => {
    const expectedState = {
      ...exampleState,
      concepts: exampleState.concepts.map(concept => {
        if (concept.id === 3) {
          return {
            id: 3,
            cardA: { ...concept.cardA },
            cardB: {
              text: "card B",
              media: { mediaType: mediaTypes.GIF, source: "cat.gif" },
              audio: null
            }
          };
        }
        return concept;
      })
    };
    expect(
      reducer(exampleState, actions.setCardGIF(3, "B", "cat.gif"))
    ).toEqual(expectedState);
  });
});
