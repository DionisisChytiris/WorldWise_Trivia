import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz8 = () => {
  const {quiz8ItemsCapitals} = useSelector((state)=>state.quiz8Capitals)

  return <QuizTemplate dataQuiz={quiz8ItemsCapitals} quizName='Quiz 8' results='ResultsCpt8'/>;
};

export default Quiz8;
 