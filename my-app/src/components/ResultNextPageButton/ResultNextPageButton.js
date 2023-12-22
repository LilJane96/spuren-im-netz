import React from 'react';
import "./ResultNextPageButton.css";

export default function ResultNextPageButton({ back, onClick, disabled }) {
  // Dynamisch die CSS-Klasse basierend auf der 'back'-Prop festlegen
  const triangleStyle = back
    ? {
        transform: "rotate(-30deg) skewX(-30deg) scale(1,.866)",
      }
    : {
        transform: "rotate(30deg) skewX(-30deg) scale(1,.866)",
      };

  return (
    <div>
      <button className="triangle" style={triangleStyle} onClick={onClick} disabled={disabled}></button>
    </div>
  );
}
