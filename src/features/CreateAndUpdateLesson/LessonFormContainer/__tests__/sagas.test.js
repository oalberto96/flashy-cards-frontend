import { get } from "redux-saga/effects";
import * as sagas from "../../LessonFormContainer/sagas";
import * as actions from "../../LessonFormContainer/actions";
import { runSaga } from "redux-saga";
import { createObjectUrl } from "../../../../common/utils/fileReader";

jest.mock("../../../../common/utils/fileReader");

// TODO: "Finish the test case"
describe("LessonFormContainer Sagas", () => {
  //   describe("handle setCardImage", () => {
  //     it("should put a SET_CARD_IMAGE_SUCCEESS when load an image", async () => {
  //       const dispatched = [];
  //       createObjectUrl.mockReturnValue("image.png");
  //       await runSaga(
  //         {
  //           dispatch: action => dispatched.push(action),
  //           getState: () => {}
  //         },
  //         sagas.setCardImage,
  //         actions.setCardImage(1, new File([""], "image.png"), "A")
  //       ).done;
  //       expect(dispatched).toEqual([
  //         actions.setCardImageSuccess(
  //           1,
  //           "A",
  //           "image.png",
  //           new File([""], "image.png")
  //         )
  //       ]);
  //     });
  //   });
});
