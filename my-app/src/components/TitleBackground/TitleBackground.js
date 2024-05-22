import React from "react";
import Background from "../../images/ResultBackground.svg";
import "./TitleBackground.css";

export default function TitleBackground({ text }) {
  return (
    <div className="TitleBackgroundContainer">
      <p className="Text">{text}</p>
      <img src={Background} alt="Result Background" />
    </div>
  );
}
