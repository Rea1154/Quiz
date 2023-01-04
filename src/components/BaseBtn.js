const BaseBtn = ({
  btnText,
  setStartGame,
  levelValue,
  selectQuestions,
  setStartTimer,
  setGameEndPage,
  setQuestionArr,
  setPlayerScore,
}) => {
  let questionNum = 0;
  if (levelValue === "könnyű") questionNum = 3;
  if (levelValue === "közepes") questionNum = 6;
  if (levelValue === "nehéz") questionNum = 10;

  const newGame = (e) => {
    if (!levelValue) {
      alert("Választanod kell egy szintet!");
      return;
    }

    if (e.target.innerText === "Új Játék") {
      setGameEndPage(false);
      setQuestionArr([]);
      setPlayerScore(0);
      setStartTimer(true);
    }

    selectQuestions(questionNum);
    setStartGame(true);
    setStartTimer(true);
  };

  return (
    <button onClick={newGame} className="btn-base shadow-baseShadow mb-2">
      {btnText}
    </button>
  );
};

export default BaseBtn;
