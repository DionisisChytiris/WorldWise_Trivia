import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz5 = () => {
  const {quiz5ItemsCapitals} = useSelector((state)=>state.quiz5Capitals)

  return <QuizTemplate dataQuiz={quiz5ItemsCapitals} quizName='Quiz 5' results='ResultsCpt5'/>;
};

export default Quiz5;
 