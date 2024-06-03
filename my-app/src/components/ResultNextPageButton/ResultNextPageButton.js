import React from "react";
import "./ResultNextPageButton.css";

export default function ResultNextPageButton({ back, onClick, disabled }) {
  // Dynamisch die CSS-Klasse basierend auf der 'back'-Prop festlegen
  const triangleStyle = back && {
    transform: "rotate(60deg)",
  };

  return (
    <div>
      <button
        className="triangle"
        style={triangleStyle}
        onClick={onClick}
        disabled={disabled}></button>
    </div>
  );
}
