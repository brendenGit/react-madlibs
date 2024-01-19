import { useState } from "react";

/* 
* A simple hook to toggle the display of an element, 
* accepts a single parameter a boolean value
* returns a boolean value
*/

function useDisplayToggle(initialVal = true) {
  const [isShowing, setIsShowing] = useState(initialVal);
  const toggleDisplay = () => {
    setIsShowing(isShowing => !isShowing);
  };
  return [isShowing, toggleDisplay];
}

export default useDisplayToggle;