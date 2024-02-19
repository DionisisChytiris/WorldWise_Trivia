import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz7 = () => {
  const {quiz7ItemsFlags} = useSelector((state)=>state.quiz7Flags)

  return <QuizTemplate dataQuiz={quiz7ItemsFlags} results='Results7'/>;
};

export default Quiz7;