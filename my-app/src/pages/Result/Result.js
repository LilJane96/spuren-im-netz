import React, { useState, useEffect } from "react";
import ResultView from "../../components/ResultView/ResultView";
import ResultNextPageButton from "../../components/ResultNextPageButton/ResultNextPageButton";
import "./Result.css";
import ResultStepper from "../../components/ResultStepper/ResultStepper";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import Ampel from "../../components/StopPopup/StopPopup";
import Stopwatch from "../../components/Stopwatch/Stopwatch";
import { calculateRemainingTime } from "../../utilis/timer";

export default function Result() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);
  const { unitId, stepId } = useParams();
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
  const totalTasks = units[unitId].answers.length + 1;
  const initialTime = calculateRemainingTime(600);

  useEffect(() => {
    const stepFromUrl = parseInt(stepId.replace("step", ""), 10) || 1;
    setCurrentStep(stepFromUrl);

    if (stepFromUrl === 1 && !localStorage.getItem("timerStart")) {
      localStorage.setItem("timerStart", Date.now().toString());
    }
  }, [stepId]);

  const handleNextPage = () => {
    const nextStep = Math.min(currentStep + 1, totalTasks);
    setCurrentStep(nextStep);
    navigate(`/result/${unitId}/step${nextStep}`);
  };

  const handlePreviousPage = () => {
    const prevStep = Math.max(currentStep - 1, 1);
    setCurrentStep(prevStep);
    navigate(`/result/${unitId}/step${prevStep}`);
  };

  const handleEndUnit = () => {
    navigate(`/hub`);
    localStorage.removeItem("timerStart");
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  return (
    <div className="ResultContainer">
      <div className="EndUnit">
        {currentStep === totalTasks &&
          (initialTime ? (
            <Stopwatch
              initialTime={initialTime}
              onTimeUp={() => {}}
              onClick={handleOpenPopup}
            />
          ) : (
            <CustomButton type="quaternary" onClick={handleEndUnit} />
          ))}
      </div>
      <div className="ResultView">
        <div className="Container">
          {currentStep === 1 ? (
            <ResultNextPageButton back={true} disabled />
          ) : (
            <ResultNextPageButton back={true} onClick={handlePreviousPage} />
          )}
          <div>
            <ResultView currentStep={currentStep} unitId={unitId} />
          </div>
          {currentStep < totalTasks ? (
            <ResultNextPageButton onClick={handleNextPage} />
          ) : (
            <ResultNextPageButton disabled />
          )}
        </div>
        <ResultStepper totalSteps={totalTasks} currentStep={currentStep} />
      </div>
      <div className="ResultStepper">
        <div className="ButtonContainer">
          <div className="Button">
            {currentStep === 1 ? (
              <CustomButton
                onClick={handlePreviousPage}
                name="Zurück"
                type="secondary"
                disabled
              />
            ) : (
              <CustomButton
                onClick={handlePreviousPage}
                name="Zurück"
                type="secondary"
              />
            )}
          </div>
          <div className="Button">
            {currentStep < totalTasks ? (
              <CustomButton
                onClick={handleNextPage}
                name="Weiter"
                type="primary"
              />
            ) : (
              <CustomButton name="Weiter" type="primary" disabled />
            )}
          </div>
        </div>
      </div>
      {popupOpen && (
        <Ampel
          initialTime={initialTime}
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
}
