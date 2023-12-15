// AnswerBoxes.js
import React, { useState } from "react";
import "./AnswerBoxes.css";

export default function AnswerBoxes({ text, onClick, isCorrect }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Update color based on isCorrect after clicking
    if (isCorrect === true) {
      setClicked(true);
    } else if (isCorrect === false) {
      setClicked(true);
    }

    // Call the provided onClick function
    onClick(text, isCorrect);
  };

  const handleBlur = () => {
    // Reset color when the box loses focus (clicked outside)
    setClicked(false);
  };

  return (
    <div
      className={`AnswerBoxesComponent ${clicked ? (isCorrect ? "green" : "red") : ""}`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0} // Enable onBlur for non-input elements
    >
      {text}
    </div>
  );
}
