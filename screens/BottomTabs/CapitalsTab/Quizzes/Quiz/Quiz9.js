import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz9 = () => {
  const {quiz9ItemsCapitals} = useSelector((state)=>state.quiz9Capitals)

  return <QuizTemplate dataQuiz={quiz9ItemsCapitals} quizName='Quiz 9' results='ResultsCpt9'/>;
};

export default Quiz9;
 