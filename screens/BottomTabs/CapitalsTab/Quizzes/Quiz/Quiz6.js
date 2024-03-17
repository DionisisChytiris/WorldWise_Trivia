import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz6 = () => {
  const {quiz6ItemsCapitals} = useSelector((state)=>state.quiz6Capitals)

  return <QuizTemplate dataQuiz={quiz6ItemsCapitals} quizName='Quiz 6' results='ResultsCpt6'/>;
};

export default Quiz6;
 