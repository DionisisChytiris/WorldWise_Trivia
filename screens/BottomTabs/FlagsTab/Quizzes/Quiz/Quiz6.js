import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz6 = () => {
  const {quiz6ItemsFlags} = useSelector((state)=>state.quiz6Flags)

  return <QuizTemplate dataQuiz={quiz6ItemsFlags} results='Results6'/>;
};

export default Quiz6;
