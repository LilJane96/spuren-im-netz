import React, { useState } from "react";
import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";
import Stepper from "../../components/Stepper/Stepper";
import units from "../../Units/Unit";
import CustomButton from "../../components/Button/CustomButton";
import "./FrameOne.css";


export default function FrameOne() {
const [selectedAnswer, setSelectedAnswer] = useState("");
const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
const [nextSimulatorPage, setNextSimulatorPage] = useState(0);

const currentUnitData = units[currentUnitIndex];
   
const totalTasks = currentUnitData ? currentUnitData.task.length : 0;



const [speachbubbleText, setSpeachbubbleText] = useState("");

const handleSubmit = (answer, isCorrect, rightAnswer, wrongAnswer) => {
  setSelectedAnswer(answer);

  if (isCorrect) {
    setSpeachbubbleText(rightAnswer);
  } else {
    setSpeachbubbleText(wrongAnswer);
  }
};


const handleNextTask = () => {
  setCurrentTaskIndex((prevIndex) => prevIndex + 1);
  setSpeachbubbleText("");
  setSelectedAnswer("");
  setNextSimulatorPage((prev) => prev + 1);

  if (currentTaskIndex === totalTasks - 1) {
    setCurrentTaskIndex(0);
    setCurrentUnitIndex((prevIndex) => prevIndex + 1);
  }
  console.log("handleNextTask called test");
};

  const handlefinishUnit = () => {
    setCurrentTaskIndex(0);
    setCurrentUnitIndex((prevIndex) => prevIndex +1)
  };

  return (
    <div className="frameOneContainer">
      <div className="stepperContainer">
        <Stepper currentStep={currentTaskIndex + 1} totalSteps={totalTasks} />
      </div>
      <div className="frameContainer">
          {currentUnitData.task.map((tasks, index) => (
        <div className="test" key={index}>
            {currentTaskIndex === index && (
  <div className="frame" key={index}>
   {tasks.step.map((step, stepIndex) => (
  step.speachbubble && <Speachbubble key={stepIndex} text={step.speachbubble} getAnswer={speachbubbleText}/>
  ))}
    <PhoneSimulator content={tasks.content} selectedAnswer={selectedAnswer} nextPage={nextSimulatorPage}/>
    <div className="boxContainer">
      <div className="answerContainer">
      {tasks.step.map((answer, stepIndex) => (
                answer.answerboxes &&
                answer.answerboxes.map((answerObj, boxIndex) => (
                  <AnswerBoxes
                    key={`${stepIndex}-${boxIndex}`}
                    text={answerObj.answer}
                    onClick={() => handleSubmit(answerObj.answer, answerObj.right, answer?.rightAnswer, answer?.wrongAnswer)}
                    isCorrect={answerObj.right}
                  />
                ))
      ))}
      </div>
      <div className="buttonContainer">
        {currentTaskIndex < totalTasks - 1 ? (
         selectedAnswer === "" ?  <CustomButton onClick={handleNextTask} name="Weiter" type="primary" disabled></CustomButton> : <CustomButton onClick={handleNextTask} name="Weiter" type="primary"></CustomButton>
         
        ):
        (
            <CustomButton onClick={handlefinishUnit} name="Unit beenden" type="primary"></CustomButton>
          )
        }
       
      </div>
    </div>
  </div>
)}
        </div>
          ))}
      </div>
    </div>
  );
}
