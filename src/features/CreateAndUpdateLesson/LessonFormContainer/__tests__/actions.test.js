/***
 *
 * LessonFormContainer action creators test
 *
 */

import * as types from "../constants";
import * as actions from "../actions";

describe("LessonFormContanier actions", () => {
  it("should create a delete concept action", () => {
    const expectedAction = {
      type: types.DELETE_CONCEPT,
      payload: { lessonId: 1 }
    };
    expect(actions.deleteConcept(1)).toEqual(expectedAction);
  });

  it("should create a setCardGIF action", () => {
    const expectedAction = {
      type: types.SET_CARD_GIF,
      payload: { conceptId: 1, card: "A", gifUrl: "funnydog.gif" }
    };
    expect(actions.setCardGIF(1, "A", "funnydog.gif")).toEqual(expectedAction);
  });
});
