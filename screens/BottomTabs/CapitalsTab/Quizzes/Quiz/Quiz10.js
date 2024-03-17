import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz10 = () => {
  const {quiz10ItemsCapitals} = useSelector((state)=>state.quiz10Capitals)

  return <QuizTemplate dataQuiz={quiz10ItemsCapitals} quizName='Quiz 10' results='ResultsCpt10'/>;
};

export default Quiz10;
 