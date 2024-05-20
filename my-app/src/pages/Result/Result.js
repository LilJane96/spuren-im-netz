import React, { useState, useEffect } from "react";
import ResultView from "../../components/ResultView/ResultView";
import ResultNextPageButton from "../../components/ResultNextPageButton/ResultNextPageButton";
import "./Result.css";
import ResultStepper from "../../components/ResultStepper/ResultStepper";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import Ampel from "../../components/StopPopup/StopPopup";
import Stopwatch from "../../components/Stopwatch/Stopwatch";

export default function Result() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const { unitId, stepId } = useParams();
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
  const totalTasks = units[unitId].answers.length + 1;
  const timerStart = parseInt(localStorage.getItem("timerStart")) || 0;
  const initialTime = Math.max(
    0,
    600 - Math.floor((Date.now() - timerStart) / 1000)
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stepFromUrl = parseInt(stepId.replace("step", ""), 10) || 1;
    setCurrentStep(stepFromUrl);
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
  };

  const handleOpenPopup = () => {
    setOpen(true);
  };

  return (
    <div className="ResultContainer">
      <div className="EndUnit">
        {currentStep === totalTasks ? (
          timerStart ? (
            <Stopwatch
              initialTime={initialTime}
              onTimeUp={() => {}}
              onClick={handleOpenPopup}
            />
          ) : (
            <CustomButton type="quaternary" onClick={handleEndUnit} />
          )
        ) : (
          <Stopwatch
            initialTime={initialTime}
            onTimeUp={() => {}}
            onClick={handleOpenPopup}
          />
        )}
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
          <div>{open && <Ampel />}</div>
        </div>
      </div>
    </div>
  );
}
