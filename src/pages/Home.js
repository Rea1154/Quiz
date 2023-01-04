import { useState, useRef } from "react";
import BaseBtn from "../components/BaseBtn";
import BaseLinkBtn from "../components/BaseLinkBtn";
import Dropdown from "../components/Dropdown";
import MessageIcon from "../components/MessageIcon";
import Timer from "../components/Timer";
import AnswerAndQuestions from "../components/AnswerAndQuestions/AnswerAndQuestions";
import EndGamePage from "../components/EndGamePage/EndGamePage";
import HomeLogic from "./HomeLogic";

const Home = () => {
  const [levelValue, setLevelValue] = useState(null);

  const [startGame, setStartGame] = useState(false);
  const [questionsArr, setQuestionArr] = useState([]);

  const [countDown, setCountDown] = useState(10);
  const [startTimer, setStartTimer] = useState(false);

  const [gameEndPage, setGameEndPage] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const timeInSec = useRef(null);

  const { selectQuestions } = HomeLogic(
    startTimer,
    setCountDown,
    setQuestionArr
  );

  return (
    <main className="w-full min-h-screen bg-bgGradient flex flex-col items-center minW1800px:pt-[10rem] p-10 ">
      <MessageIcon />
      {!startGame && (
        <>
          <div className="w-[16rem] flex justify-between mb-3">
            <BaseBtn
              btnText={"Indítás"}
              setStartGame={setStartGame}
              selectQuestions={selectQuestions}
              levelValue={levelValue}
              setStartTimer={setStartTimer}
            />
            <BaseLinkBtn btnText={"Feltöltés"} page="/upload" />
          </div>
          <Dropdown setLevelValue={setLevelValue} />
        </>
      )}

      {startGame && !gameEndPage && (
        <>
          <Timer
            startTimer={startTimer}
            setCountDown={setCountDown}
            countDown={countDown}
            timeInSec={timeInSec}
          />
          <AnswerAndQuestions
            questionsArr={questionsArr}
            setStartTimer={setStartTimer}
            setPlayerScore={setPlayerScore}
            playerScore={playerScore}
            setGameEndPage={setGameEndPage}
            setLevelValue={setLevelValue}
            countDown={countDown}
          />
        </>
      )}
      {gameEndPage && (
        <EndGamePage
          playerScore={playerScore}
          questionsArr={questionsArr}
          setStartGame={setStartGame}
          selectQuestions={selectQuestions}
          levelValue={levelValue}
          setStartTimer={setStartTimer}
          setLevelValue={setLevelValue}
          setGameEndPage={setGameEndPage}
          setQuestionArr={setQuestionArr}
          setPlayerScore={setPlayerScore}
        />
      )}
    </main>
  );
};

export default Home;
