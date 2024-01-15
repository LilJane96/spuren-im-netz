import React, { useState } from "react";
import "./AnswerBoxes.css";

const AnswerBoxes = ({
  type,
  text,
  imageUrl,
  onClick,
  isCorrect,
  imgAnswer,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <img
            className={`textContainer image ${
              type === "image" ? "imageContent" : ""
            }`}
            src={process.env.PUBLIC_URL + `/${imageUrl}`}
            alt="Bildbeschreibung"
          />
          <p style={{ margin: "0" }}>{imgAnswer}</p>
        </div>
      );
    }

    return <p className="textContainer text">{text}</p>;
  };

  return (
    <div
      className={`AnswerBoxesComponent ${
        type === "image" ? "imageContent" : ""
      } ${clicked ? (isCorrect ? "green" : "red") : ""}`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}>
      {renderContent()}
    </div>
  );
};

export default AnswerBoxes;
