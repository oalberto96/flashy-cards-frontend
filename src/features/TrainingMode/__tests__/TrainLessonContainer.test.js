import React from "react";
import { mount } from "enzyme";

import {
  TrainLessonContainer,
  mapStateToProps,
  mapDispatchToProps
} from "../TrainLessonContainer";
import * as actions from "../actions";

const initialState = {
  lesson: {},
  rateConcept: false,
  showAnswer: false,
  queue: [],
  conceptsDone: []
};

describe("TrainLessonContainer", () => {
  it("should render a TrainLesson component", () => {
    const props = {};
    const wrapper = mount(<TrainLessonContainer {...props} />);
    expect(wrapper.find("TrainLesson").exists()).toEqual(true);
  });

  describe("mapStateToProps", () => {
    it("should map the lesson from the state", () => {
      const state = {
        ...initialState,
        lesson: { id: 1 }
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.lesson).toEqual({ id: 1 });
    });

    it("should map the rate concept status", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.isRatingConcept).toEqual(initialState.rateConcept);
    });

    it("should map the showAnswer state", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.showAnswer).toEqual(initialState.showAnswer);
    });

    it("should map the queue from the state", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.queue).toEqual(initialState.queue);
    });

    it("should map concepts done", () => {
      const state = {
        ...initialState
      };
      const props = mapStateToProps(state, null);
      expect(props.conceptsDone).toEqual(state.conceptsDone);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch a showAnswer action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch);
      componentDispatch.showAnswer(2); //2 = lessonId
      expect(dispatch.mock.calls[0][0]).toEqual(actions.showAnswer(2));
    });

    it("should dispatch a rateConcept action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch);
      componentDispatch.rateConcept(2);
      expect(dispatch).toBeCalledWith(actions.rateConcept(2));
    });

    it("should dispatch a rateConceptBad action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch);
      componentDispatch.rateConceptBad(2);
      expect(dispatch).toBeCalledWith(actions.rateConceptBad(2));
    });

    it("should dispatch a rateConceptGood action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch);
      componentDispatch.rateConceptGood(2);
      expect(dispatch).toBeCalledWith(actions.rateConceptGood(2));
    });
  });
});
