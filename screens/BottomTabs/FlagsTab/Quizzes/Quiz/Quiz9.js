import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz9 = () => {
  const {quiz9ItemsFlags} = useSelector((state)=>state.quiz9Flags)

  return <QuizTemplate dataQuiz={quiz9ItemsFlags} quizName='Quiz 9' results='Results9'/>;
};

export default Quiz9;
