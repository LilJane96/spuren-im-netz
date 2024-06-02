import React from "react";
import "./TitleBackground.css";

export default function TitleBackground({ text }) {
  return (
    <div className="TitleBackgroundContainer">
      <p className="Text">{text}</p>
      {/* <img alt="Result Background" /> */}
    </div>
  );
}
