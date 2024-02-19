import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz5 = () => {
  const {quiz5ItemsFlags} = useSelector((state)=>state.quiz5Flags)

  return <QuizTemplate dataQuiz={quiz5ItemsFlags} results='Results5'/>;
};

export default Quiz5;
