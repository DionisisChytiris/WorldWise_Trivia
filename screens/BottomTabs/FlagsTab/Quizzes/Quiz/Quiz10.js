import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz10 = () => {
  const {quiz10ItemsFlags} = useSelector((state)=>state.quiz10Flags)

  return <QuizTemplate dataQuiz={quiz10ItemsFlags} results='Results10'/>;
};

export default Quiz10;