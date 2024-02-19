import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz9 = () => {
  const {quiz9ItemsFlags} = useSelector((state)=>state.quiz9Flags)

  return <QuizTemplate dataQuiz={quiz9ItemsFlags} results='Results9'/>;
};

export default Quiz9;
