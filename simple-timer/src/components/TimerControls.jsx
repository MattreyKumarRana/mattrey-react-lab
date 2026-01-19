import { useEffect, useRef } from "react";

const TimerControls = ({ toggleTimer, isRunning, resetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        className="mt-3 bg-green-500 text-white
        px-4 py-2 rounded hover:bg-green-600"
        onClick={toggleTimer}
        ref={startButtonRef}
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={resetTimer}
        className="mt-3 ml-3 bg-red-500 text-white px-4 py-2 rounded
         hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
