/**
 *
 * LessonListContainer sagas test
 *
 */
import { runSaga } from "redux-saga";
import { requestLessonsSaga, requestDeleteLesson } from "../sagas";
import * as actions from "../actions";
import { Lessons } from "../../../../agent";

jest.mock("../../../../agent");

describe("LessonListContainer sagas", () => {
  describe("requestLessonsSaga", () => {
    it("should put a REQUEST_LESSONS_SUCCEEDED when api return lessons", async () => {
      const lessons = [{ id: 1 }, { id: 2 }];
      const resp = { data: lessons };
      Lessons.all.mockResolvedValue(resp);
      const dispatched = [];
      const result = await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => {}
        },
        requestLessonsSaga
      ).done;
      expect(dispatched).toEqual([actions.requestLessonsSucceeded(lessons)]);
    });
  });

  describe("requestDeleteLesson", () => {
    it("should put a REQUEST_DELETE_LESSON_SUCCESS and a REQUEST_LESSONS at delete a lesson", async () => {
      const lesson_id = 1;
      const state = {
        lessons: {
          idLessonToDelete: lesson_id
        }
      };
      Lessons.delete.mockResolvedValue({});
      const dispatched = [];
      const result = await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => state
        },
        requestDeleteLesson
      ).done;
      expect(dispatched).toEqual([
        actions.requestDeleteLessonSuccess(),
        actions.requestLessons()
      ]);
    });

    it("should put a REQUEST_DELETE_LESSON_ERROR if an error exist", async () => {
      const lesson_id = 1;
      const state = {
        lessons: {
          idLessonToDelete: lesson_id
        }
      };
      Lessons.delete.mockRejectedValue({});
      const dispatched = [];
      const result = await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => state
        },
        requestDeleteLesson
      ).done;
      expect(dispatched).toEqual([actions.requestDeleteLessonError()]);
    });
  });
});
