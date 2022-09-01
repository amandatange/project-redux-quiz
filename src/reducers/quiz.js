import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    id: 1,
    questionText:
      " On ___ ___, he asked me what day it was.\r\n“It's ___ ___.”",
    options: ["November 3rd", "December 3rd", "October 3rd", "September 3rd"],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    questionText:
      "Clueless and 10 Things I Hate About You are both based on literary works.\r\nWhich are they based on?",
    options: [
      "Pride & Prejudice and Hamlet",
      "Romeo & Juliet and Jane Eyre",
      "Hamlet and Emma",
      "Emma and Taming of the Shrew",
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    questionText:
      "According to Elle Woods, the best way to pick up something you dropped is with a ...",
    options: [
      "swish and flick",
      "bend and snap",
      "arch and grab",
      "bow and snatch",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    questionText:
      "What film is this iconic line from? “Yo, hold my poodle! Hold my poodle!”",
    options: ["Clueless", "White Chicks", "Legally Blonde", "Scary Movie"],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionText:
      "“It's like I have ESPN or something!” is referring to Karen's ability to sense ______.",
    options: [
      "the weather with her breasts",
      "the time of day with her ears",
      "people's moods with her eyes",
      "the weather with her knees",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 6,
    questionText: "“Why should I listen to you, anyway?\r\nYou're __________.”",
    options: [
      "a fake woke poser with a trustfund",
      "a loser who can't dress right",
      "a virgin who can't drive",
      "just mad you can't eat carbs",
    ],
    correctAnswerIndex: 2,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  points: 0,
  quizOver: false,
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
        state.currentQuestionIndex += 1;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
    addPoint: (state) => {
      state.points += 1;
    },
    restart: () => {
      return initialState;
    },
  },
});
