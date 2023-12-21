import React, { useState } from 'react';
import ResultView from '../../components/ResultView/ResultView';
import ResultNextPageButton from '../../components/ResultNextPageButton/ResultNextPageButton';
import "./Result.css";
import ResultStepper from '../../components/ResultStepper/ResultStepper';
import CustomButton from '../../components/Button/CustomButton';

export default function Result() {
  const totalTasks = 5; // Setze die Gesamtzahl der Aufgaben hier ein
  const [currentStep, setCurrentStep] = useState(1); // Initialer Schritt ist 1

  const handleNextPage = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalTasks)); // Gehe zur nächsten Seite, begrenzt durch die Gesamtzahl der Aufgaben
  };

  const handlePreviousPage = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1)); // Gehe zur vorherigen Seite, begrenzt auf mindestens 1
  };

  console.log("currentStep", currentStep)

  return (
    <div className="ResultContainer">
      <div className='ResultView'>
        {currentStep === 1 ? 
        <ResultNextPageButton back={true} disabled /> 
        : 
        <ResultNextPageButton back={true} onClick={handlePreviousPage} />
        }
        <div>
          <ResultView />
        </div>
        <ResultNextPageButton onClick={handleNextPage} />
      </div>
      <div className='ResultStepper'>
        <ResultStepper totalSteps={totalTasks} currentStep={currentStep} />
        <div className='ButtonContainer'>
            <div className='Button'>
                <CustomButton onClick={handlePreviousPage} name="Zurück" type="tertiary"></CustomButton>
            </div>
            <div className='Button'>
                <CustomButton onClick={handleNextPage} name="Weiter" type="primary"></CustomButton>
            </div>
        </div>
      </div>
    </div>
  );
}
