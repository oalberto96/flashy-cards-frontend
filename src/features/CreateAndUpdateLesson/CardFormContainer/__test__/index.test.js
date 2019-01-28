import { mapDispatchToProps, mapStateToProps } from "../";
import * as actions from "../../LessonFormContainer/actions";

const state = {
  id: 1,
  name: "asd",
  description: "dasd",
  audience: {
    id: 1,
    name: "PRIVATE"
  },
  concepts: [
    {
      id: 1,
      cardA: {
        text: "",
        media: {
          mediaType: {
            id: 1,
            name: "IMAGE"
          },
          source: "https://media.gif"
        },
        audio: null
      },
      cardB: {
        text: "vibora",
        media: null,
        audio: null
      }
    }
  ],
  deleted_concepts: null,
  deletedConcepts: []
};

describe("CardFormContainer", () => {
  describe("mapStateToProps", () => {
    it("should map cardId with conceptId", () => {
      const state = {};
      const ownProps = { conceptId: "1", cardType: "A" };
      expect(mapStateToProps(state, ownProps).cardId).toEqual("1A");
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch a setCardText action", () => {
      const dispatch = jest.fn();
      const ownProps = {
        cardType: "A",
        conceptId: "1"
      };
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.setCardText("new text");
      expect(dispatch).toBeCalledWith(
        actions.setCardText(ownProps.conceptId, "new text", ownProps.cardType)
      );
    });

    it("should dispatch a setCardImage action", () => {
      const dispatch = jest.fn();
      const ownProps = {
        cardType: "B",
        conceptId: "2"
      };
      const componentDispatch = mapDispatchToProps(dispatch, ownProps);
      componentDispatch.setCardImage("image.png");
      expect(dispatch).toBeCalledWith(
        actions.setCardImage(ownProps.conceptId, "image.png", ownProps.cardType)
      );
    });

    it("should dispatch a setCardGif action", () => {
      const dispatch = jest.fn();
      const ownProps = {
        cardType: "A",
        conceptId: 1
      };
      const componentDispatcher = mapDispatchToProps(dispatch, ownProps);
      componentDispatcher.setCardGif("cat.gif");
      expect(dispatch).toBeCalledWith(actions.setCardGIF(1, "A", "cat.gif"));
    });
  });
});
