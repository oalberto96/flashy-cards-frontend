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
});
