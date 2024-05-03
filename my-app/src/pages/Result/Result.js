import React, { useState } from "react";
import ResultView from "../../components/ResultView/ResultView";
import ResultNextPageButton from "../../components/ResultNextPageButton/ResultNextPageButton";
import "./Result.css";
import ResultStepper from "../../components/ResultStepper/ResultStepper";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";

export default function Result() {
  const totalTasks = 5;
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const pathname = useParams();
  console.log("pathname", pathname);

  const handleNextPage = () => {
    const nextStep = Math.min(currentStep + 1, totalTasks);
    setCurrentStep(nextStep);
    navigate(`/result/${pathname.unitId}/step${nextStep}`);
  };

  const handlePreviousPage = () => {
    const prevStep = Math.max(currentStep - 1, 1);
    setCurrentStep(prevStep);
    navigate(`/result/${pathname.unitId}/step${prevStep}`);
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
        <div className="Container">
          {currentStep === 1 ? (
            <ResultNextPageButton back={true} disabled />
          ) : (
            <ResultNextPageButton back={true} onClick={handlePreviousPage} />
          )}
          <div>
            <ResultView currentStep={currentStep} unitId={pathname.unitId} />
          </div>
          <ResultNextPageButton onClick={handleNextPage} />
        </div>
        <ResultStepper totalSteps={totalTasks + 1} currentStep={currentStep} />
      </div>
      <div className="ResultStepper">
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
      </div>
    </div>
  );
}
