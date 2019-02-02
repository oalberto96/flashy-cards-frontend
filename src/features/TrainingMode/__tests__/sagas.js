import { runSaga } from "redux-saga";
import { requestLessonToTrainingMode } from "../sagas";
import * as actions from "../actions";
import { Lessons } from "../../../agent";

jest.mock("../../../agent");

describe("Training mode sagas", () => {
  describe("requestLessonToTrain", () => {
    it("should put a REQUEST_LESSON_TO_TRAIN_SUCCESS when the server returns a lesson", async () => {
      const lesson = { id: 1 };
      const response = { data: lesson };
      Lessons.withConcepts.mockResolvedValue(response);
      const dispatched = [];
      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => {}
        },
        requestLessonToTrainingMode,
        actions.requestLessonToTrain(1)
      ).done;
      expect(dispatched).toEqual([actions.requestLessonToTrainSuccess(lesson)]);
    });
  });
});
