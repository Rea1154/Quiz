import { useEffect } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HomeLogic = (startTimer, setCountDown, setQuestionArr) => {
  const questionsFromStorage = (dataApi) => {
    let playerQuestionsData = window.localStorage.getItem("playerQuestionsArr");
    playerQuestionsData = JSON.parse(playerQuestionsData);
    const dataConcat = [...dataApi, ...playerQuestionsData];

    dataConcat.map((question, i) => (question.id = i + 1));
    return dataConcat;
  };
  const { data } = useQuery(["questions"], () => {
    return Axios.get(
      "https://mocki.io/v1/69e0fa8c-3b61-4cd1-baf7-5314aa360534"
    ).then((res) => {
      //get questions from storage (if it's exist) and concat with fetched data
      if (window.localStorage.length) {
        const dataConcat = questionsFromStorage(res.data);
        return dataConcat;
      } else {
        return res.data;
      }
    });
  });

  const shuffleAnswers = (randomIndex) => {
    const answers = data[randomIndex].answers;

    let shuffledAnswers = [];
    let usedIndexes = [];

    let i = 0;
    while (i < answers.length) {
      let randomNum = Math.floor(Math.random() * answers.length);
      if (!usedIndexes.includes(randomNum)) {
        shuffledAnswers.push(answers[randomNum]);
        usedIndexes.push(randomNum);
        i++;
      }
      data[randomIndex].answers = shuffledAnswers;
    }
  };
  const selectQuestions = (questionNumber) => {
    let num = 0;
    const questionId = [];

    while (num !== questionNumber) {
      const randomIndex = Math.floor(Math.random() * data.length);

      //continue if question is duplicate
      if (questionId.includes(data[randomIndex].id)) continue;

      questionId.push(data[randomIndex].id);

      // create shuffled answer arr and add to data obj
      shuffleAnswers(randomIndex);

      setQuestionArr((prev) => [...prev, data[randomIndex]]);

      num++;
    }
  };

  //restart timer on next question
  useEffect(() => {
    if (startTimer) setCountDown(10);
  }, [startTimer, setCountDown]);

  return { selectQuestions };
};

export default HomeLogic;
