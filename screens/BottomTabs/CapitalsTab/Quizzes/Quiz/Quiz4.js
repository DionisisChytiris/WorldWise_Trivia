import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz4 = () => {
  const {quiz4ItemsCapitals} = useSelector((state)=>state.quiz4Capitals)

  return <QuizTemplate dataQuiz={quiz4ItemsCapitals} quizName='Quiz 4' results='ResultsCpt4'/>;
};

export default Quiz4;
 