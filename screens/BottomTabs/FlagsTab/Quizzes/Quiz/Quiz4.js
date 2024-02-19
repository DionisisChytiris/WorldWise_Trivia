import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz4 = () => {
  const {quiz4ItemsFlags} = useSelector((state)=>state.quiz4Flags)

  return <QuizTemplate dataQuiz={quiz4ItemsFlags} results='Results4'/>;
};

export default Quiz4;
