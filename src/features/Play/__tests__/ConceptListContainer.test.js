import { mapStateToProps, mapDispatchToProps } from "../ConceptListContainer";
import {
  loadLessonToPlay,
  moveToNextCard,
  moveToPreviousCard
} from "../ConceptListContainer/actions";

const sampleState = () => {
  return {
    playingLesson: {
      lessonId: 2,
      lessonName: "other name",
      lessonDescription: "little description",
      concepts: [
        {
          conceptId: 1,
          cardA: {
            cardId: 3,
            text: "flughafen"
          },
          cardB: {
            cardId: 4,
            text: "airport"
          }
        }
      ],
      index: 0
    }
  };
};

const ownProps = { match: { params: { lessonId: 2 } } };

describe("ConceptListContainer Component", () => {
  describe("The container element", () => {
    describe("mapStateToProps", () => {
      it("should map the state to props correctly", () => {
        const sampleLesson = {
          lesson: sampleState().playingLesson
        };
        const appState = sampleState();
        const componentState = mapStateToProps(appState);
        expect(componentState).toEqual(sampleLesson);
      });
    });

    describe("mapDispatchToProps", () => {
      describe("Map every dispatch function to props correctly", () => {
        it("should map loadLessonToPlay", () => {
          const dispatch = jest.fn();
          const componentDispatch = mapDispatchToProps(dispatch, ownProps);
          componentDispatch.loadLessonToPlay(2);
          expect(dispatch.mock.calls[0][0]).toEqual(loadLessonToPlay(2));
        });

        it("should map moveToNextCard", () => {
          const dispatch = jest.fn();
          const componentDispatch = mapDispatchToProps(dispatch, ownProps);
          componentDispatch.moveToNextCard();
          expect(dispatch.mock.calls[0][0]).toEqual(moveToNextCard());
        });

        it("should map moveToPreviuosCard", () => {
          const dispatch = jest.fn();
          const componentDispatch = mapDispatchToProps(dispatch, ownProps);
          componentDispatch.moveToPreviousCard();
          expect(dispatch.mock.calls[0][0]).toEqual(moveToPreviousCard());
        });
      });
    });
  });
});
