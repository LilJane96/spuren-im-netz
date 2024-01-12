import React, { useState } from "react";
import ResultView from "../../components/ResultView/ResultView";
import ResultNextPageButton from "../../components/ResultNextPageButton/ResultNextPageButton";
import "./Result.css";
import ResultStepper from "../../components/ResultStepper/ResultStepper";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const totalTasks = 5;
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNextPage = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalTasks));
  };

  const handlePreviousPage = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleEndUnit = () => {
    navigate(`/hub`);
  };

  return (
    <div className="ResultContainer">
      <div className="EndUnit">
        <CustomButton type="quaternary" onClick={handleEndUnit} />
      </div>
      <div className="ResultView">
        {/* {currentStep === 1 ? (
          <ResultNextPageButton back={true} disabled />
        ) : (
          <ResultNextPageButton back={true} onClick={handlePreviousPage} />
        )} */}
        <div>
          <ResultView />
        </div>
        {/* <ResultNextPageButton onClick={handleNextPage} /> */}
      </div>
      {/* <div className="ResultStepper">
        <ResultStepper totalSteps={totalTasks} currentStep={currentStep} />
        <div className="ButtonContainer">
          <div className="Button">
            {currentStep === 1 ? (
              <CustomButton
                onClick={handlePreviousPage}
                name="Zurück"
                type="tertiary"
                disabled></CustomButton>
            ) : (
              <CustomButton
                onClick={handlePreviousPage}
                name="Zurück"
                type="tertiary"></CustomButton>
            )}
          </div>
          <div className="Button">
            <CustomButton
              onClick={handleNextPage}
              name="Weiter"
              type="primary"></CustomButton>
          </div>
        </div>
      </div> */}
    </div>
  );
}
