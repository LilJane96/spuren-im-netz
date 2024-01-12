import React from "react";
import Heart from "../../images/Stepper/Heart.svg";
import HeartActiveBlue from "../../images/Stepper/HeartActiveBlue.svg";
import HeartActiveGreen from "../../images/Stepper/HeartActiveGreen.svg";
import HeartActive from "../../images/Stepper/HeartActive.svg";
import Goal from "../../images/Stepper/Goal.svg";

import "./Stepper.css";

const Stepper = ({ currentStep, totalSteps }) => {
  const theme =
    document.documentElement.getAttribute("data-theme") || "default";
  console.log("Theme", document.documentElement.getAttribute("data-theme"));

  const getActiveHeart = () => {
    switch (theme) {
      case "default":
        return HeartActive;
      case "green":
        return HeartActiveBlue;
      case "red":
        return HeartActiveGreen;
      case "blue":
        return HeartActive;
      case "orange":
        return HeartActive;
      case "yellow":
        return HeartActive;
      case "pink":
        return HeartActive;
      case "purple":
        return HeartActive;
      default:
        return HeartActive;
    }
  };

  return (
    <div className="stepper">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`step ${index + 1 <= currentStep ? "active" : ""} ${
            index + 1 === totalSteps ? "stepGoal" : ""
          }`}>
          <div className="icon">
            {index + 1 < currentStep ? (
              <img src={getActiveHeart()} alt={`Step ${index + 1}`} />
            ) : index + 1 === totalSteps ? (
              <img src={Goal} alt={`Step ${index + 1}`} />
            ) : (
              <img
                src={Heart}
                alt={`Step ${index + 1}`}
                style={{ width: "51px", height: "49px" }}
              />
            )}
            {index > 0 && (
              <div
                className={`line ${index < currentStep ? "active" : ""}`}></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
