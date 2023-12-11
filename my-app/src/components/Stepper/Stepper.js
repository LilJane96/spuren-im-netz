import React from "react";
import Star from "../../images/Star.svg";
import StarActive from "../../images/StarActive.png";
import Goal from "../../images/Goal.svg";

import "./Stepper.css";

const Stepper = ({ currentStep, totalSteps }) => {
  return (
    <div className="stepper">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`step ${index + 1 <= currentStep ? "active" : ""} ${
            index + 1 === totalSteps ? "stepGoal" : ""
          }`}
        >
          <div className="icon">
            {index + 1 < currentStep ? (
              <img src={StarActive} alt={`Step ${index + 1}`} />
            ) : index + 1 === totalSteps ? (
              <img src={Goal} alt={`Step ${index + 1}`} />
            ) : (
              <img src={Star} alt={`Step ${index + 1}`} />
            )}
            {index > 0 && <div className={`line ${index < currentStep ? "active" : ""}`}></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
