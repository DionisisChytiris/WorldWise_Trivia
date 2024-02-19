import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz1 = () => {
  const {quiz1ItemsFlags} = useSelector((state)=>state.quiz1Flags)

  return <QuizTemplate dataQuiz={quiz1ItemsFlags} quizName='Quiz 1' results='Results1'/>;
};

export default Quiz1;
