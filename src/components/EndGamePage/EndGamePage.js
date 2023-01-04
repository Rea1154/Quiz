import { useState } from "react";
import BaseBtn from "../BaseBtn";
import Dropdown from "../Dropdown";
import EndGamePageLogic from "./EndGamePageLogic";

import useToggleCheckmark from "../../useToggleCheckmark";

const EndGamePage = ({
  playerScore,
  questionsArr,
  setStartGame,
  selectQuestions,
  levelValue,
  setStartTimer,
  setLevelValue,
  setGameEndPage,
  setQuestionArr,
  setPlayerScore,
}) => {
  const [toggleCheckMark, showCheckMark] = useToggleCheckmark();

  const {
    playerInfo,
    validationStyle,
    resetGame,
    storePlayerInfo,
    validation,
    setvalidationStyle,
  } = EndGamePageLogic(
    playerScore,
    toggleCheckMark,
    setGameEndPage,
    setQuestionArr,
    setPlayerScore,
    setStartGame,
    setLevelValue,
    setStartTimer
  );

  return (
    <div className="endgame-container flex flex-col items-center">
      <button
        onClick={resetGame}
        className="home-btn text-lightest/40 minW1000px:hover:text-lightest/70 transition duration-300"
      >
        {"◂ kezdőlap"}
      </button>
      <div className="container-form">
        <h3 className="total-score text-[2rem] mb-2 text-lightest text-center">
          {questionsArr.length + "/" + playerScore}
        </h3>
        <form>
          <label htmlFor="name" className="block text-lightest">
            Név :
          </label>
          <div className="player-name-container h-[3rem] flex justify-center items-center">
            <input
              onChange={validation}
              onBlur={() => {
                setvalidationStyle("border-none");
              }}
              name="name"
              id="name"
              type="text"
              maxLength={15}
              placeholder="Andrea"
              className={
                "h-full p-2 bg-white/20 text-lightest rounded-sm border focus:outline-none " +
                validationStyle
              }
            />
            <button
              onClick={storePlayerInfo}
              className="p-2 bg-white/20 text-lightest text-[1.5rem] h-full flex items-center
              transition duration-300 hover:bg-white/30 rounded-br-sm rouunded-tr-sm"
            >
              +
            </button>
            <span
              className={
                "check-mark minW300px:text-green-600 ml-1 transition duration-300" +
                (showCheckMark ? " opacity-1 " : " opacity-0")
              }
            >
              &#10004;
            </span>
          </div>
        </form>
      </div>
      <div className="container-newGame mt-10 flex flex-col items-center">
        <hr className="w-[120%] h-1 bg-lightest/20 border-none mb-4" />
        <BaseBtn
          btnText="Új Játék"
          playerScore={playerScore}
          questionsArr={questionsArr}
          setStartGame={setStartGame}
          selectQuestions={selectQuestions}
          levelValue={levelValue}
          setStartTimer={setStartTimer}
          setGameEndPage={setGameEndPage}
          setQuestionArr={setQuestionArr}
          setPlayerScore={setPlayerScore}
          setLevelValue={setLevelValue}
        />
        <Dropdown setLevelValue={setLevelValue} />
      </div>
    </div>
  );
};

export default EndGamePage;
