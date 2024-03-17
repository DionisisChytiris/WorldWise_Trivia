import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz8 = () => {
  const {quiz8ItemsFlags} = useSelector((state)=>state.quiz8Flags)

  return <QuizTemplate dataQuiz={quiz8ItemsFlags} quizName='Quiz 8' results='Results8'/>;
};

export default Quiz8;
