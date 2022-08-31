import React from "react";
import { useSelector } from "react-redux";

import {
  NavButtonContainer,
  NextButton,
  NavButtonIcon,
  ProgressContainer,
  ProgressStatus,
} from "components_styled/StyledElements";
import next from "../assets/next.png";
import restart from "../assets/replay.png";

const ProgressBar = ({ handleNextButton, hasAnswered, restartQuiz }) => {
  const percentCompleted = `${useSelector(
    (store) =>
      (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;

  const quizOver = useSelector((store) => store.quiz.quizOver);

  return (
    <>
      {hasAnswered && (
        <div>
          Press the arrow to continue to the next question!
        </div>
      )}
      <ProgressContainer>
        <NavButtonContainer>
          {hasAnswered && (
            <NextButton>
              <NavButtonIcon onClick={handleNextButton} src={next} />
            </NextButton>
          )}
          {quizOver && (
            <NextButton>
              <NavButtonIcon onClick={restartQuiz} src={restart} />
            </NextButton>
          )}
        </NavButtonContainer>
        <ProgressStatus width={percentCompleted} />
      </ProgressContainer>
    </>
  );
};

export default ProgressBar;
