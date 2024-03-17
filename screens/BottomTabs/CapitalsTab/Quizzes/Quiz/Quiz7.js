import React from "react";
import QuizTemplate from "../QuizTemplate";
import {useSelector} from 'react-redux'

const Quiz7 = () => {
  const {quiz7ItemsCapitals} = useSelector((state)=>state.quiz7Capitals)

  return <QuizTemplate dataQuiz={quiz7ItemsCapitals} quizName='Quiz 7' results='ResultsCpt7'/>;
};

export default Quiz7;
 