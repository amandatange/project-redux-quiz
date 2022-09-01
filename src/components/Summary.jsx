import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SummaryDiv,
  QADiv,
  Nextbutton,
  NextbuttonContainer,
  NavButtonIcon } from "components_styled/StyledElements";
import { quiz } from "reducers/quiz";

import next from "../assets/next.png";

const Summary = ({ setQuizDone }) => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  const points = useSelector((store) => store.quiz.points);

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
    setQuizDone(false);
  };

  return (
    <SummaryDiv>
      <h1>Quiz is done!</h1>
      <QADiv>
        <h3>You got {points} / 6 correct!</h3>
        {points > 4 ? (
          <h3>WOOOOOOHOOOOO!</h3>
        ) : points > 2 ? (
          <h3>Not bad!</h3>
        ) : (
          <h3>Better luck next time!</h3>
        )}
      </QADiv>
      {answers.map((answer, index) => {
        const correctAnswer =
          answer.question.options[answer.question.correctAnswerIndex];

        return (
          <QADiv key={answer.questionId}>
            <h2>
              <br />
              {index + 1}. {answer.question.questionText}
            </h2>
            <p>
              You answered {answer.answer} which was{" "}
              {answer.isCorrect ? "correct! ✅" : "sadly incorrect. ❌"}
            </p>
            {!answer.isCorrect && (
              <p>The correct answer was {correctAnswer}.</p>
            )}
          </QADiv>
        );
      })}
      <br />
      
      <NextbuttonContainer>
        <Nextbutton onClick={restartQuiz}>
          <p>Restart quiz?</p>
          <NavButtonIcon src={next} />
        </Nextbutton>
      </NextbuttonContainer>
    </SummaryDiv>
  );
};

export default Summary;
