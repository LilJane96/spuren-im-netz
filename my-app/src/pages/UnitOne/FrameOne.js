import React, { useState } from "react";
import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";
import Stepper from "../../components/Stepper/Stepper";
import { findUnitById } from '../../Units/Unit';
import CustomButton from "../../components/Button/CustomButton";
import { useParams } from 'react-router-dom';
import { Link } from "@mui/material";
import "./FrameOne.css";


export default function FrameOne() {
const [selectedAnswer, setSelectedAnswer] = useState("");
const [reasonText, setReasonText] = useState("");
const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
const [currentStep, setCurrentStep] = useState(1);
const [nextSimulatorPage, setNextSimulatorPage] = useState(0);
const [speachbubbleText, setSpeachbubbleText] = useState("");
const [count, setCount] = useState(0);
const { unitId } = useParams();
const currentUnitData = findUnitById(unitId);


let units = JSON.parse(localStorage.getItem("UnitsArray")) || {};

if (!units[unitId]) {
  units[unitId] = {
    attempts: 0,
    wrongAttempts: 0,
    taskAttempts: {},
    answers: [],
  }
};

if (!currentUnitData) {
  return <div>Unit nicht gefunden</div>;
}


const answersLength = currentUnitData.task.map(task =>
  task.step.reduce((acc, step) => acc + (step.answerboxes ? step.answerboxes.length : 0), 0)
);

const totalTasks = currentUnitData ? currentUnitData.task.length : 0;

const findAnswerIndex = (taskIndex) => {
  return units[unitId].answers.findIndex((answer) => answer.taskIndex === taskIndex);
};

const handleSubmit = (question, answer, isCorrect, rightAnswer, wrongAnswer, reason) => {
  setSelectedAnswer(answer);
  setReasonText(reason);
  
  console.log("isCorrect", isCorrect)

  if(!isCorrect){
    setCount(prevCount => prevCount + 1);
  }

  console.log("count", count)
 // Hinzufügen des taskIndex zu jeder Antwort
 const newItem = {
  question: question,
  answer: answer,
  isCorrect: isCorrect,
  taskIndex: currentTaskIndex,
  wrongAttempts: count, // Setze Anzahl der falschen Versuche auf 0 oder 1
};

// Increment attempts count
units[unitId].attempts++;

// // Check if the answer is incorrect and increment wrong attempts count
// if (!isCorrect) {
//   // Increment wrong attempts count for the current task
//   newItem.wrongAttempts = 1;
//   units[unitId].wrongAttempts += 1;
// }

const existingAnswerIndex = findAnswerIndex(currentTaskIndex);

// Check if an answer for the current task already exists in the answers array
if (existingAnswerIndex !== -1) {
  // Update existing answer
  units[unitId].answers[existingAnswerIndex] = newItem;
} else {
  // Add the new item to the array for the current unit
  units[unitId].answers.push(newItem);
}

// Increment wrong attempts count for the current task
units[unitId].taskAttempts[currentTaskIndex] =
  (units[unitId].taskAttempts[currentTaskIndex] || 0) + newItem.wrongAttempts;

// Saving the updated array in local storage
localStorage.setItem("UnitsArray", JSON.stringify(units));

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
    setCount(0);

    if (currentTaskIndex === totalTasks - 1) {
      setCurrentTaskIndex(0);
      setCurrentStep(1);
    }
  }, 300);
};

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
                      answer.answerboxes &&
                      answer?.answerboxes.map((answerObj, boxIndex) => (
                        <AnswerBoxes
                          key={`${stepIndex}-${boxIndex}`}
                          type={answerObj?.type}
                          text={answerObj?.answer}
                          onClick={() => handleSubmit(answer?.question, answerObj?.answer, answerObj?.right, answer?.rightAnswer, answer?.wrongAnswer, answer?.reason)}
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
                      <Link href="/result/unit1">
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
