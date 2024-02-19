import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz2 = () => {
  const {quiz2ItemsFlags} = useSelector((state)=>state.quiz2Flags) 

  return <QuizTemplate dataQuiz={quiz2ItemsFlags} results='Results2'/>;
};

export default Quiz2;
