import { useEffect } from "react";

const Timer = ({ startTimer, setCountDown, countDown, timeInSec }) => {
  useEffect(() => {
    let intervalId = null;
    if (countDown <= 0) {
      clearInterval(intervalId);
      return;
    }
    if (startTimer) {
      intervalId = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTimer, countDown, setCountDown]);

  return (
    <div className="flex justify-around items-center bg-darkest text-lightest border-2 border-midLight rounded-full mb-2 w-[4.5rem]">
      <i className="fa-regular fa-clock"></i>
      <time ref={timeInSec} id="time">
        {countDown}
      </time>
    </div>
  );
};

export default Timer;
