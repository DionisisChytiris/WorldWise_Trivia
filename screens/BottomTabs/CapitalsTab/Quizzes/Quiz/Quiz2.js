import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz2 = () => {
  const {quiz2ItemsCapitals} = useSelector((state)=>state.quiz2Capitals)

  return <QuizTemplate dataQuiz={quiz2ItemsCapitals} quizName='Quiz 2' results='ResultsCpt2'/>;
};

export default Quiz2;
 