import { useState, useEffect } from "react";

const AnswerAndQuestionsLogic = (
  questionsArr,
  setStartTimer,
  setPlayerScore,
  setGameEndPage,
  setLevelValue,

  countDown
) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [onLastQuestion, setOnLastQuestion] = useState(false);
  const [canGoToNextQuestion, setCanGoToNextQuestion] = useState(false);

  const displayNextQuestion = () => {
    // if the player doesn't pick something return
    if (!canGoToNextQuestion) {
      alert("Választanod kell valamit!");
      return;
    }
    if (questionIndex < questionsArr.length - 1) {
      setQuestionIndex((prev) => prev + 1);

      //on last question, change btn
      if (questionIndex === questionsArr.length - 2) {
        setOnLastQuestion(true);
      }
    }
    setCanGoToNextQuestion(false);
    setStartTimer(true);
    return;
  };

  const displayScoreBtn = () => {
    const btnScore = document.querySelector(".btn-score");
    btnScore.classList.remove("invisible");
    btnScore.classList.add("visible");
  };

  const showCorrectAnswer = () => {
    const answers = document.querySelectorAll(".answer");
    const correctAnswer = questionsArr[questionIndex].correctAnswer;

    [...answers].forEach((answer) => {
      if (answer.textContent === correctAnswer) {
        answer.classList.remove("border-midLight");
        answer.classList.add("border-green-500");
      }
      answer.style.pointerEvents = "none";
    });
  };

  const checkAnswer = (e) => {
    const correctAnswer = questionsArr[questionIndex].correctAnswer;

    // find correct answer and change style
    showCorrectAnswer();

    // if clicked element not correct answer change style
    if (e.target.textContent !== correctAnswer) {
      e.target.classList.remove("border-midLight");
      e.target.classList.add("border-red-500");
    } else {
      setPlayerScore((prev) => prev + 1);
    }

    if (onLastQuestion) displayScoreBtn();

    setCanGoToNextQuestion(true);
    setStartTimer(false);
  };

  const playerOutOfTime = () => {
    if (!canGoToNextQuestion) {
      showCorrectAnswer();
      setCanGoToNextQuestion(true);
      setStartTimer(false);
    }
  };

  useEffect(() => {
    if (countDown === 0) {
      playerOutOfTime();
      alert("Lejárt az idő!");
      if (onLastQuestion) displayScoreBtn();
    }
  }, [countDown]);

  const resetGame = () => {
    setLevelValue(null);
    setGameEndPage(true);
  };

  return {
    questionIndex,
    checkAnswer,
    displayNextQuestion,
    resetGame,
    onLastQuestion,
    canGoToNextQuestion,
  };
};

export default AnswerAndQuestionsLogic;
