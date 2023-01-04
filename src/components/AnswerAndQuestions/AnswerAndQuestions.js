import { memo } from "react";
import AnswerAndQuestionsLogic from "./AnswerAndQuestionsLogic";

const AnswerAndQuestions = ({
  questionsArr,
  setStartTimer,
  setPlayerScore,
  setGameEndPage,
  setLevelValue,
  countDown,
}) => {
  const {
    questionIndex,
    checkAnswer,
    displayNextQuestion,
    resetGame,
    onLastQuestion,
    canGoToNextQuestion,
  } = AnswerAndQuestionsLogic(
    questionsArr,
    setStartTimer,
    setPlayerScore,
    setGameEndPage,
    setLevelValue,
    countDown
  );
  return (
    <div className="question-answears-container w-[20rem] flex flex-col items-center">
      <h3 className="question text-midLight pb-5 text-center">
        {questionsArr[questionIndex].question}
      </h3>
      <div className="answers flex flex-col items-center">
        {questionsArr[questionIndex].answers.map((answer) => (
          <p
            className="answer animate-show bg-darkest text-midLight w-[20rem] text-center mb-2 border-2 border-midLight rounded-sm p-[0.5rem] cursor-pointer"
            key={answer}
            onClick={checkAnswer}
          >
            {answer}
          </p>
        ))}
        {!onLastQuestion && canGoToNextQuestion && (
          <i
            onClick={displayNextQuestion}
            className="fa-solid fa-caret-right btn-next cursor-pointer text-midLight text-2xl mt-2 transition duration-300 minW1000px:hover:scale-[1.2] rounded-sm"
          ></i>
        )}

        <button
          onClick={resetGame}
          className="btn-score btn-base shadow-baseShadow rounded-sm invisible"
        >
          eredmény
        </button>
      </div>
    </div>
  );
};

export default memo(AnswerAndQuestions);
