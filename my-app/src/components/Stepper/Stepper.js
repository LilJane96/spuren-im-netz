import React from "react";
import Heart from "../../images/Stepper/Heart.svg";
import HeartActiveDefault from "../../images/Stepper/HeartActive.svg";
import Goal from "../../images/Stepper/Goal.svg";

import "./Stepper.css";

const Stepper = ({ currentStep, totalSteps }) => {
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
              <img
                src={HeartActiveDefault}
                alt={`Step ${index + 1}`}
                className="heart active"
              />
            ) : index + 1 === totalSteps ? (
              <img src={Goal} alt={`Step ${index + 1}`} className="goal" />
            ) : (
              <img
                src={Heart}
                alt={`Step ${index + 1}`}
                className="heart inactive"
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
