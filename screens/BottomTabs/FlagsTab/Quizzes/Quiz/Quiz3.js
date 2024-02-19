import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz3 = () => {
  const {quiz3ItemsFlags} = useSelector((state)=>state.quiz3Flags) 

  return <QuizTemplate dataQuiz={quiz3ItemsFlags} results='Results3'/>;
};

export default Quiz3;