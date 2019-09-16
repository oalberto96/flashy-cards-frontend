import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Score from "../Score";
import { requestLessonScore } from "../actions";

const ScoreContainer = props => {
  const dispatch = useDispatch();
  console.log(props.match.params.lessonId);
  useEffect(() => {
    dispatch(requestLessonScore(props.match.params.lessonId));
  }, [dispatch]);
  return <Score {...props}></Score>;
};

export default ScoreContainer;
