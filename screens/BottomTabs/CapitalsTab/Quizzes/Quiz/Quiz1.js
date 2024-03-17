import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz1 = () => {
  const {quiz1ItemsCapitals} = useSelector((state)=>state.quiz1Capitals)

  return <QuizTemplate dataQuiz={quiz1ItemsCapitals} quizName='Quiz 1' results='ResultsCpt1'/>;
};

export default Quiz1;
 