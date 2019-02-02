import React from "react";
import { mount } from "enzyme";

import {
  TrainLessonContainer,
  mapStateToProps,
  mapDispatchToProps
} from "../TrainLessonContainer";
import * as actions from "../actions";

const initialState = {
  lessonTraining: {
    lesson: {},
    rateConcept: false,
    showAnswer: false,
    queue: [],
    conceptsDone: []
  }
};

const ownProps = {
  match: {
    params: { lessonId: 1 }
  }
};

describe("TrainLessonContainer", () => {
  it("should render a TrainLesson component", () => {
    const props = {
      lesson: {},
      isRatingConcept: false,
      isAnswerVisible: false,
      queue: [],
      conceptsDone: jest.fn(),
      showAnswer: jest.fn(),
      rateConcept: jest.fn(),
      rateConceptGood: jest.fn(),
      rateConceptBad: jest.fn(),
      requestLessonToTrain: jest.fn()
    };
    const wrapper = mount(<TrainLessonContainer {...props} />);
    expect(wrapper.find("TrainLesson").exists()).toEqual(true);
  });

  describe("mapStateToProps", () => {
    it("should map the lesson from the state", () => {
      const state = {
        lessonTraining: {
          ...initialState.lessonTraining,
          lesson: { id: 1 }
        }
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.lesson).toEqual({ id: 1 });
    });

    it("should map the current concept id from the state", () => {
      const state = {
        lessonTraining: {
          ...initialState.lessonTraining,
          queue: [{ id: 2, mistakes: 0 }],
          lesson: {
            id: 1,
            concepts: [
              { id: 1, cardA: { text: "asd" }, cardB: { text: "aw" } },
              { id: 2, cardA: { text: "cardText2" }, cardB: { text: "aw" } }
            ]
          }
        }
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.currentConceptId).toEqual(2);
    });

    it("should map the current cardA from the state", () => {
      const state = {
        lessonTraining: {
          ...initialState.lessonTraining,
          queue: [{ id: 2, mistakes: 0 }],
          lesson: {
            id: 1,
            concepts: [
              { id: 1, cardA: { text: "asd" }, cardB: { text: "aw" } },
              { id: 2, cardA: { text: "cardText2" }, cardB: { text: "aw" } }
            ]
          }
        }
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.cardA).toEqual({ text: "cardText2" });
    });

    it("should map the current cardB from the state", () => {
      const state = {
        lessonTraining: {
          ...initialState.lessonTraining,
          queue: [{ id: 2, mistakes: 0 }],
          lesson: {
            id: 1,
            concepts: [
              { id: 1, cardA: { text: "asd" }, cardB: { text: "cardB 1" } },
              { id: 2, cardA: { text: "cardText2" }, cardB: { text: "cardB2" } }
            ]
          }
        }
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.cardB).toEqual({ text: "cardB2" });
    });

    it("should map the rate concept status", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.isRatingConcept).toEqual(
        initialState.lessonTraining.rateConcept
      );
    });

    it("should map the showAnswer state", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.showAnswer).toEqual(
        initialState.lessonTraining.isAnswerVisible
      );
    });

    it("should map the queue from the state", () => {
      const state = {
        ...initialState
      };
      const newProps = mapStateToProps(state, null);
      expect(newProps.queue).toEqual(initialState.lessonTraining.queue);
    });

    it("should map concepts done", () => {
      const state = {
        ...initialState
      };
      const props = mapStateToProps(state, null);
      expect(props.conceptsDone).toEqual(state.lessonTraining.conceptsDone);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch a requestLessonToTrain action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.requestLessonToTrain(1);
      expect(dispatch).toBeCalledWith(actions.requestLessonToTrain(1));
    });

    it("should dispatch a showAnswer action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.showAnswer(2); //2 = lessonId
      expect(dispatch.mock.calls[0][0]).toEqual(actions.showAnswer(2));
    });

    it("should dispatch a rateConcept action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.rateConcept(2);
      expect(dispatch).toBeCalledWith(actions.rateConcept(2));
    });

    it("should dispatch a rateConceptBad action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.rateConceptBad(2);
      expect(dispatch).toBeCalledWith(actions.rateConceptBad(2));
    });

    it("should dispatch a rateConceptGood action", () => {
      const dispatch = jest.fn();
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.rateConceptGood(2);
      expect(dispatch).toBeCalledWith(actions.rateConceptGood(2));
    });
  });
});
