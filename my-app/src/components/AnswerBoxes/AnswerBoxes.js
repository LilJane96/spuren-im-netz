import React, { useState } from "react";
import "./AnswerBoxes.css";

export default function AnswerBoxes({ type, text, imageUrl, onClick, isCorrect }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isCorrect === true) {
      setClicked(true);
    } else if (isCorrect === false) {
      setClicked(true);
    }

    onClick(text, isCorrect);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  const renderContent = () => {
    if (type === "text") {
      return <p className="textContainer text">{text}</p>;
    } else if (type === "image") {
      return (
        <img
          className="textContainer image"
          src={process.env.PUBLIC_URL + imageUrl}
          alt="Bildbeschreibung"
          style={{ maxWidth: "177px", height: "177px" }}
        />
      );
    }

    return <p className="textContainer text">{text}</p>;
  };

  return (
    <div
    className={`AnswerBoxesComponent ${type === "image" ? "imageContent" : ""} ${
      clicked ? (isCorrect ? "green" : "red") : ""
    }`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {renderContent()}
    </div>
  );
}
