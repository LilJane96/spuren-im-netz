import React from "react";
import Heart from "../../images/Heart.svg";

import HeartActive from "../../images/HeartActive.svg";
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
              <img src={HeartActive} alt={`Step ${index + 1}`} />
            ) : index + 1 === totalSteps ? (
              <img src={Goal} alt={`Step ${index + 1}`} />
            ) : (
              <img src={Heart} alt={`Step ${index + 1}`} style={{width: "51px", height: "49px"}}/>
            )}
            {index > 0 && <div className={`line ${index < currentStep ? "active" : ""}`}></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
