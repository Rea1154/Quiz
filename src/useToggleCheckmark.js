import { useState } from "react";
const useToggleCheckmark = () => {
  const [showCheckMark, setShowCheckmark] = useState(false);

  const toggleCheckMark = () => {
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
    }, 1500);
  };

  return [toggleCheckMark, showCheckMark, setShowCheckmark];
};

export default useToggleCheckmark;
