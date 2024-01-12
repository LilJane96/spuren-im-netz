import React, { useEffect, useState } from "react";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import "./FinishGame.css";
import { useParams } from "react-router-dom";
import FinalFrameOne from "../../components/Final/FinalFrameOne";
import FinalFrameTwo from "../../components/Final/FinalFrameTwo";
import FinalFrameThree from "../../components/Final/FinalFrameThree";

export default function FinishGame() {
  const { stepId } = useParams(); // Extrahiere den "step"-Parameter aus der URL

  const [currentStep, setCurrentStep] = useState(stepId);

  // Funktion, um zum nächsten Schritt zu wechseln
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Funktion, um zum vorherigen Schritt zu wechseln (falls benötigt)
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    setCurrentStep(stepId);
  }, [stepId]);

  return (
    <div className="FinishGameContainer">
      <div className="PhoneSimulator">
        {currentStep === "step1" && <PhoneSimulator content={11} />}
      </div>
      <div className="FinalFrameOne">
        {currentStep === "step2" && <FinalFrameOne />}
      </div>
      <div>{currentStep === "step3" && <FinalFrameTwo />}</div>
      <div>{currentStep === "step4" && <FinalFrameThree />}</div>

      <div className="NavigationButtons">
        {currentStep > 1 && (
          <button onClick={goToPreviousStep}>Vorheriger Schritt</button>
        )}

        {currentStep < 2 && (
          <button onClick={goToNextStep}>Nächster Schritt</button>
        )}
      </div>
    </div>
  );
}
