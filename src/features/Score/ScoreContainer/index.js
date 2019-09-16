import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Score from "../Score";
import { requestLessonScore } from "../actions";
import { getScore } from "../selectors";
import NoData from "../NoData";

const ScoreContainer = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestLessonScore(props.match.params.lessonId));
  }, [dispatch]);
  const score = useSelector(getScore);
  if (score.length > 0) {
    return <Score {...props} score={score}></Score>;
  }
  return <NoData></NoData>;
};

export default ScoreContainer;
