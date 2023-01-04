import { Link } from "react-router-dom";
import { useRef } from "react";
import BaseInput from "../components/BaseInput";
import UploadLogic from "./UploadLogic";

import useToggleCheckmark from "../useToggleCheckmark";

const Upload = ({ setPlayerQuestions }) => {
  const [toggleCheckMark, showCheckMark] = useToggleCheckmark();

  const playerQuestion = useRef();
  const playerQuestionAnswer1 = useRef();
  const playerQuestionAnswer2 = useRef();
  const playerQuestionAnswer3 = useRef();

  const { addPlayerQuestions } = UploadLogic(
    setPlayerQuestions,
    playerQuestion,
    playerQuestionAnswer1,
    playerQuestionAnswer2,
    playerQuestionAnswer3,
    toggleCheckMark
  );

  return (
    <section className="w-full min-h-screen bg-bgGradient flex flex-col items-center minW1800px:pt-[10rem] p-10">
      <Link
        to="/"
        className="home-btn text-lightest/40 minW1000px:hover:text-lightest/70 transition duration-300 mb-4 minW1800px:text-[1.5rem]"
      >
        {"◂ kezdőlap"}
      </Link>

      <form>
        <div className="new-question-container flex flex-col mb-2">
          <label className="text-lightest" htmlFor="new-question">
            Új kérdés :
          </label>
          <textarea
            className="newQuestion-input bg-darkest text-lightest rounded-sm p-1"
            name="new-question"
            id="new-question"
            ref={playerQuestion}
            cols="30"
            rows="3"
            maxLength={60}
            placeholder="Mi az uborka népies neve?"
            required
          ></textarea>
        </div>

        <div className="answers-container flex flex-col mb-2">
          <BaseInput
            label="Válasz1 :"
            placeholder="ugorka"
            refValue={playerQuestionAnswer1}
          />
          <BaseInput
            label="Válasz2 :"
            placeholder="ugrika"
            refValue={playerQuestionAnswer2}
          />
          <BaseInput
            label="Jó válasz :"
            placeholder="ubroka"
            refValue={playerQuestionAnswer3}
          />
        </div>

        <button
          onClick={addPlayerQuestions}
          className="newQuestion-btn mt-5 rounded-full transition duration-300 bg-5000 bg-transparent minW1000px:bg-lightest/30 minW1000px:hover:bg-lightest/50 text-lightest minW1000px:hover:text-darkest text-[1.6rem] h-10 w-10 flex justify-center items-center m-auto"
        >
          <span className="-translate-y-[3px] ">+</span>
        </button>
      </form>
      <span
        className={
          "check-mark minW300px:text-green-600 ml-1 transition duration-300" +
          (showCheckMark ? " opacity-1 " : " opacity-0")
        }
      >
        &#10004;
      </span>
    </section>
  );
};

export default Upload;
