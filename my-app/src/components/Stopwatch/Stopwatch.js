import React, { useState, useEffect } from "react";
import "./Stopwatch.css";
import { calculateRemainingTime } from "../../utilis/timer";

const Stopwatch = ({ onTimeUp, onClick }) => {
  const initialTime = calculateRemainingTime(600);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    let timerStart = parseInt(localStorage.getItem("timerStart"));
    const now = Date.now();

    if (!timerStart) {
      timerStart = now;
      localStorage.setItem("timerStart", timerStart.toString());
    }

    if (initialTime <= 0) {
      onTimeUp();
      return;
    }

    setTimeLeft(initialTime);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const minuteDeg = minutes === 0 ? 0 : ((minutes % 60) / 60) * 360 - 57;
  const secondDeg = (seconds / 60) * 360;

  return (
    <div className="ClockContainer" onClick={onClick}>
      <div id="liveclock" className="outer_face">
        <div className="marker oneseven"></div>
        <div className="marker twoeight"></div>
        <div className="marker fourten"></div>
        <div className="marker fiveeleven"></div>

        <div className="inner_face">
          <div
            className="hand minute"
            style={{ transform: `rotate(${-minuteDeg}deg)` }}></div>
          <div
            className="hand second"
            style={{ transform: `rotate(${-secondDeg}deg)` }}></div>
        </div>
        <div className="stopwatch_element stopwatch_element_1"></div>
        <div className="stopwatch_element stopwatch_element_2"></div>
        <div className="stopwatch_element stopwatch_element_3"></div>
      </div>

      <div className="stopwatch-display">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Stopwatch;
