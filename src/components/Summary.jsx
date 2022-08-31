import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SummaryDiv, QADiv } from "components_styled/StyledElements";
import { quiz } from "reducers/quiz";
import ProgressBar from "./ProgressBar";

const Summary = ({ setQuizDone }) => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  let counter = 0;

  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
    setQuizDone(false);
  };

  return (
    <SummaryDiv>
      <h1>Quiz is done!</h1>
      {answers.map((answer, index) => {
        const correctAnswer =
          answer.question.options[answer.question.correctAnswerIndex];
        if (correctAnswer === answer.answer) {
          counter++;
        }

        return (
          <QADiv key={answer.questionId}>
            <h2>
              <br />
              {index + 1}. {answer.question.questionText}
            </h2>
            <p>
              You answered {answer.answer} which was{" "}
              {answer.isCorrect ? "correct! ✔️" : "sadly incorrect. ❌"}
            </p>
            {!answer.isCorrect && (
              <p>The correct answer was {correctAnswer}.</p>
            )}
          </QADiv>
        );
      })}
      <br />
      <QADiv>
        <h3>You got {counter} / 6 correct!</h3>
        {counter > 4 ? (
          <h3>WOOOOOOHOOOOO!</h3>
        ) : counter > 2 ? (
          <h3>Not bad!</h3>
        ) : (
          <h3>Better luck next time!</h3>
        )}
      </QADiv>
      <ProgressBar setQuizDone={setQuizDone} restartQuiz={restartQuiz} />
    </SummaryDiv>
  );
};

export default Summary;
