import { memo } from "react";
const MessageIcon = () => {
  return (
    <div className="h-[8rem]">
      <i className="fa-regular fa-message text-[5rem] relative z-10"></i>
      <i className="fa fa-thin fa-message text-[5rem] text-lightest block -translate-y-[5.2rem] translate-x-[0.4rem]"></i>
      <h1 className="text-center -translate-y-[9.2rem] text-[1.5rem] text-darkest font-bold">
        Quiz
      </h1>
    </div>
  );
};

export default memo(MessageIcon);
