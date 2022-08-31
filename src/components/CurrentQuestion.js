import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import party from "party-js";
import next from "../assets/next.png";

import ProgressBar from "./ProgressBar";
import {
  ButtonContainer,
  Button,
  Title,
  Nextbutton,
  NextbuttonContainer,
  NavButtonIcon
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
  const colorGreen = "hsla(169, 100%, 50%, .3)";
  const colorRed = "hsla(315, 100%, 50%, .2)";
  const colorNone = "hsla(0,0%,0%,0)";


  const [hasAnswered, setHasAnswered] = useState(false);
  const [guessedQuestionIndex, setGuessedQuestionIndex] = useState();
  const [symbol, setSymbol] = useState('❌');

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
        return colorGreen;
      } else {
        return colorRed;
      }
    }
    return colorNone;
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
      setSymbol('✅');
    } else {
      setHasAnswered(true);
      audio[randomAudioIndex].play();
      setGuessedQuestionIndex(index);
      setSymbol('❌');
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
      <Title>
        <p>Question {question.id} / 6:</p>
        {question.questionText}
      </Title>
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
              {guessedQuestionIndex === index && (
                <p>{symbol}</p>
              )}
            </Button>
          );
        })}
      </ButtonContainer>
      <NextbuttonContainer>
        <Nextbutton onClick={handleNextButton}>
          <p>{question.id < 4 ? "next question" : "finish quiz"}</p>
          <NavButtonIcon src={next} />
        </Nextbutton>
      </NextbuttonContainer>
    </>
  );
};
