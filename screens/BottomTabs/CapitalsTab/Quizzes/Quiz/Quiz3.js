import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz3 = () => {
  const {quiz3ItemsCapitals} = useSelector((state)=>state.quiz3Capitals)

  return <QuizTemplate dataQuiz={quiz3ItemsCapitals} quizName='Quiz 3' results='ResultsCpt3'/>;
};

export default Quiz3;
 