import { useState, useRef, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

function Timer() {
  const timerRef = useRef(null);

  const [timer, setTimer] = useState(() => {
    const time = localStorage.getItem("time");

    return parseInt(time) || 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(timer));
  }, [timer]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start Timer
      timerRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <>
      <TimerDisplay timer={timer} />
      <TimerControls
        resetTimer={resetTimer}
        toggleTimer={toggleTimer}
        isRunning={isRunning}
      />
    </>
  );
}

export default Timer;
