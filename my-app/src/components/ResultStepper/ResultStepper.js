import React from 'react';
import './ResultStepper.css';

export default function ResultStepper({ totalSteps, currentStep }) {

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < totalSteps; i++) {
      const isActive = i === currentStep - 1;
      circles.push(
        <div
          key={i}
          className={`ResultStepperCircle ${isActive ? 'active' : ''}`}
        />
      );
    }
    return circles;
  };

  return <div className="ResultStepperContainer">{renderCircles()}</div>;
}
