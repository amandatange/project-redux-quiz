import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import party from "party-js";

import ProgressBar from "./ProgressBar";
import {
  ButtonContainer,
  Button,
  Title,
} from "components_styled/StyledElements";
import howcouldthishappen from "../assets/howcouldthishappentome.mp3";
import howdareyou from "../assets/howdareyou.mp3";
import letmeaskyou from "../assets/letmeaskyousomething.mp3";
import teachyou from "../assets/teachyouafewthings.mp3";
import asif from "../assets/asif.mp3";

const arr = [howcouldthishappen, howdareyou, letmeaskyou, teachyou, asif];
const audio = [];
for (const sound of arr) {
  const newsound = new Audio();
  newsound.src = sound;
  audio.push(newsound);
}

export const CurrentQuestion = ({ setQuizDone }) => {
  const randomAudioIndex = Math.floor(Math.random() * audio.length);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [guessedQuestionIndex, setGuessedQuestionIndex] = useState();
  const dispatch = useDispatch();
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  const quizOver = useSelector((store) => store.quiz.quizOver);

  const isCorrect = (index) => {
    if (question.correctAnswerIndex === index) {
      return true
    }
    return false
  };

  const setColor = (index) => {
    if (hasAnswered && guessedQuestionIndex === index) {
      if (isCorrect(index)) {
        return "hsla(120, 100%, 80%, .3)"
      } else {
        return "hsla(0, 100%, 80%, .3)"
      }
    }
    return 'hsla(0,0%,0%,0)';
  }

  const onAnswerSubmit = (id, index) => {
    setHasAnswered(true);
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
      if (isCorrect(index)) {
      party.confetti(document.body, {
        count: party.variation.range(100, 500),
        size: party.variation.range(1.8, 2.6),
        shapes: ["star"],
      });
      setGuessedQuestionIndex(index);
    } else {
      setHasAnswered(true);
      audio[randomAudioIndex].play();
      setGuessedQuestionIndex(index);
    }
  };

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setHasAnswered(false);
    setGuessedQuestionIndex(null);
  };

  if (quizOver) {
    setQuizDone(true);
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <Title>{question.questionText}</Title>
      <ButtonContainer>
        {question.options.map((item, index) => {
          return (
            <Button
              disabled={hasAnswered}
              onClick={() => onAnswerSubmit(question.id, index)}
              key={item}
              BgColor={() => setColor(index)}
            >
              {item}
            </Button>
          );
        })}
      </ButtonContainer>
      <ProgressBar
        handleNextButton={handleNextButton}
        hasAnswered={hasAnswered}
        setQuizDone={setQuizDone}
      />
    </>
  );
};
