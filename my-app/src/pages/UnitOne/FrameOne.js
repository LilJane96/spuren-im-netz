import React, { useState } from "react";
import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";
import Stepper from "../../components/Stepper/Stepper";
import { findUnitById } from '../../Units/Unit';
import CustomButton from "../../components/Button/CustomButton";
import { useParams } from 'react-router-dom';
import "./FrameOne.css";
import { Link } from "@mui/material";


export default function FrameOne() {
const [selectedAnswer, setSelectedAnswer] = useState("");
const [reasonText, setReasonText] = useState("");
const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
const [currentStep, setCurrentStep] = useState(1);
const [nextSimulatorPage, setNextSimulatorPage] = useState(0);
const [speachbubbleText, setSpeachbubbleText] = useState("");


const { unitId } = useParams();
const currentUnitData = findUnitById(unitId);

  if (!currentUnitData) {
    return <div>Unit nicht gefunden</div>;
  }


const answersLength = currentUnitData.task.map(task =>
  task.step.reduce((acc, step) => acc + (step.answerboxes ? step.answerboxes.length : 0), 0)
);

const totalTasks = currentUnitData ? currentUnitData.task.length : 0;




const handleSubmit = (answer, isCorrect, rightAnswer, wrongAnswer, reason) => {
  console.log("AN", answer)
  setSelectedAnswer(answer);
  setReasonText(reason);

  if (isCorrect) {
    setSpeachbubbleText(rightAnswer);
  } else {
    setSpeachbubbleText(wrongAnswer);
  }
};


const handleNextTask = () => {
  setTimeout(() => {
    setCurrentTaskIndex((prevIndex) => prevIndex + 1);
    setCurrentStep((prevStep) => prevStep + 1);
    setSpeachbubbleText("");
    setSelectedAnswer("");
    setReasonText("");
    setNextSimulatorPage((prev) => prev + 1);

    if (currentTaskIndex === totalTasks - 1) {
      setCurrentTaskIndex(0);
      // setCurrentUnitIndex((prevIndex) => prevIndex + 1);
      setCurrentStep(1);
    }
  }, 300);
};


  // const handlefinishUnit = () => {
  //   setCurrentTaskIndex(0);
  //   // setCurrentUnitIndex((prevIndex) => prevIndex +1)
  // };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentTaskIndex((prevIndex) => prevIndex - 1);
      setCurrentStep((prevStep) => prevStep - 1);
      setSpeachbubbleText("");
      setSelectedAnswer("");
      setReasonText("");
      setNextSimulatorPage((prev) => prev - 1);
    }
  };


  return (
    <div className="frameOneContainer">
      <div className="stepperContainer">
        <Stepper currentStep={currentStep} totalSteps={totalTasks} />
      </div>
      <div className="frameContainer">
        {currentUnitData.task.map((tasks, index) => (
          <div className="currentFrame" key={index}>
            {currentTaskIndex === index && (
              <div>
              <div className="frame" key={index}>
                {tasks.step.map((step, stepIndex) => (
                  step.speachbubble && <Speachbubble key={stepIndex} text={speachbubbleText || step.speachbubble} reason={reasonText} />
                ))}
                <PhoneSimulator content={tasks.content} selectedAnswer={selectedAnswer} nextPage={nextSimulatorPage} />
                <div className="boxContainer">
                  <div className={`answerContainer ${answersLength[index] >= 4 ? "fourOrMore" : "smallerThenFour"}`}>
                    {tasks.step.map((answer, stepIndex) => (
                      answer?.answerboxes.map((answerObj, boxIndex) => (
                        <AnswerBoxes
                          key={`${stepIndex}-${boxIndex}`}
                          type={answerObj?.type}
                          text={answerObj?.answer}
                          onClick={() => handleSubmit(answerObj?.answer, answerObj?.right, answer?.rightAnswer, answer?.wrongAnswer, answer?.reason)}
                          isCorrect={answerObj?.right}
                          imageUrl={answerObj?.answer}
                          imgAnswer={answerObj?.imgAnswer}
                        />
                      ))
                    ))}
                  </div>
                 
                </div>
                </div>
                <div className="buttonContainer">
                    {currentTaskIndex > 0 ? (
                      <CustomButton onClick={handleGoBack} name="Zurück" type="tertiary"></CustomButton>
                    ) : 
                    (
                      <CustomButton onClick={handleGoBack} name="Zurück" type="tertiary" disabled></CustomButton>
                    )}
                    {currentTaskIndex < totalTasks - 1 ? (
                      selectedAnswer === "" ? <CustomButton onClick={handleNextTask} name="Weiter" type="primary" disabled></CustomButton> : <CustomButton onClick={handleNextTask} name="Weiter" type="primary"></CustomButton>

                    ) : (
                      <Link href="/hub">
                        <CustomButton name="Unit beenden" type="primary" />
                      </Link>
                    )}

                  </div>
              </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
