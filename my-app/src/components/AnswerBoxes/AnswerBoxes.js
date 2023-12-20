import React, { useState } from "react";
import BILD from "../../images/image1.jpg";
import "./AnswerBoxes.css";

export default function AnswerBoxes({ type, text, imageUrl, onClick, isCorrect, imgAnswer }) {
  const [clicked, setClicked] = useState(false);
  console.log("IMG", imageUrl)

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
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
         <img
          className="textContainer image"
          src={process.env.PUBLIC_URL + `/${imageUrl}`}
          alt="Bildbeschreibung"
        />
        {/* <img
          className="textContainer image"
          src={BILD}
          alt="Bildbeschreibung"
        /> */}
        <p style={{margin: "0"}}>{imgAnswer}</p>
        </div>
        
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
