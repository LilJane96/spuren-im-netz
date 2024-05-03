import React from "react";
import ResultContentOverview from "./ResultConent/ResultContentOverview/ResultContentOverview";
import TitleBackground from "../TitleBackground/TitleBackground";

import "./ResultView.css";
import ResultContentSteps from "./ResultConent/ResultContentSteps/ResultContentSteps";

export default function ResultView({ unitId, currentStep }) {
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
  const topic = units[unitId].topic;
  const totalTasks = units[unitId].answers.length;
  console.log("totalTasks", totalTasks);
  console.log("currentStep", currentStep);

  const renderResultPage = () => {
    switch (currentStep) {
      case 1:
        return <ResultContentOverview unitId={unitId} />;
      default:
        if (currentStep > 1 && currentStep <= totalTasks + 1) {
          return (
            <ResultContentSteps
              unitId={unitId.replace(/\D/g, "") - 1}
              stepId={currentStep - 2}
            />
          );
        } else {
          return null;
        }
    }
  };

  return (
    <div className="ResultViewContainer">
      <div>
        <TitleBackground text={`${topic} bestanden`} />
      </div>
      <div>{renderResultPage()}</div>
    </div>
  );
}
