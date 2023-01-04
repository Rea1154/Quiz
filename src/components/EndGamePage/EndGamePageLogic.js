import { useState } from "react";

const EndGamePageLogic = (
  playerScore,
  toggleCheckMark,
  setGameEndPage,
  setQuestionArr,
  setPlayerScore,
  setStartGame,
  setLevelValue,
  setStartTimer
) => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const nameInput = document.querySelector("#name");
  const [validationStyle, setvalidationStyle] = useState();

  const validation = () => {
    const nameInput = document.querySelector("#name");

    nameInput.value.trim().length < 3
      ? setvalidationStyle("border-red-500")
      : setvalidationStyle("border-green-500");
  };

  const storePlayerInfo = (e) => {
    e.preventDefault();
    if (nameInput.value.trim().length < 3) {
      alert("A nevednek minimum 3 betűsnek kell lennie!");
      return;
    }

    const player = {
      playerName: nameInput.value,
      score: playerScore,
    };

    setPlayerInfo((prev) => [...prev, player]);
    nameInput.value = "";

    toggleCheckMark();
  };

  const resetGame = () => {
    setGameEndPage(false);
    setQuestionArr([]);
    setPlayerScore(0);
    setStartGame(false);
    setLevelValue(null);
    setStartTimer(false);
  };
  return {
    playerInfo,
    validationStyle,
    resetGame,
    storePlayerInfo,
    validation,
    setvalidationStyle,
  };
};

export default EndGamePageLogic;
