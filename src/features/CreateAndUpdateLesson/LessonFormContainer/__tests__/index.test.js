/**
 *
 * LessonFormContainer test
 *
 */

import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { LessonFormContainer, mapDispatchToProps } from "../index";
import * as actions from "../actions";

describe("LessonFormContainer", () => {
  describe("the container element", () => {
    it("should render a LessonForm", () => {
      const props = {
        addNewConcept: jest.fn(),
        requestLessonToEdit: jest.fn(),
        deleteConcept: jest.fn(),
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
          }
        ],
        setCardText: jest.fn(),
        setCardImage: jest.fn(),
        name: "",
        match: { path: "edit", params: { lessonId: 1 } }
      };
      const wrapper = shallow(<LessonFormContainer {...props} />);
      expect(wrapper.find("LessonForm").exists()).toEqual(true);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map deleteConcept", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, undefined);
      componentDispatch.deleteConcept(1);
      expect(dispatch).toBeCalledWith(actions.deleteConcept(1));
    });
  });
});
