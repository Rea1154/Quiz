const UploadLogic = (
  setPlayerQuestions,
  playerQuestion,
  playerQuestionAnswer1,
  playerQuestionAnswer2,
  playerQuestionAnswer3,
  toggleCheckMark
) => {
  const validation = (answersArr) => {
    const answerInputs = document.querySelectorAll(".newQuestion-input");
    const emptyInput = [...answerInputs].some(
      (input) => input.value.trim().length === 0
    );

    let sameAnswer = false;
    if (answersArr.length !== new Set(answersArr).size) {
      sameAnswer = true;
    }

    return sameAnswer || emptyInput ? true : false;
  };

  const addPlayerQuestions = (e) => {
    e.preventDefault();

    const questionAndAnswers = {
      id: null,
      question: playerQuestion.current.value,
      answers: [
        playerQuestionAnswer1.current.value,
        playerQuestionAnswer2.current.value,
        playerQuestionAnswer3.current.value,
      ],

      correctAnswer: playerQuestionAnswer3.current.value,
    };

    const emptyInput = validation(questionAndAnswers.answers);
    if (emptyInput) {
      alert("Minden inputot ki kell tölteni, a válaszok nem egyezhetnek!");
      return;
    }

    setPlayerQuestions((prev) => [...prev, questionAndAnswers]);

    playerQuestion.current.value = "";
    playerQuestionAnswer1.current.value = "";
    playerQuestionAnswer2.current.value = "";
    playerQuestionAnswer3.current.value = "";
    toggleCheckMark();
  };

  return { addPlayerQuestions };
};

export default UploadLogic;
