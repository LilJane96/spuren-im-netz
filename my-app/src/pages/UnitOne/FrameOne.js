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
const [reasonText, setReasonText] = useState("");
const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
const [nextSimulatorPage, setNextSimulatorPage] = useState(0);

const currentUnitData = units[currentUnitIndex];

const answersLength = currentUnitData.task.map(task =>
  task.step.reduce((acc, step) => acc + (step.answerboxes ? step.answerboxes.length : 0), 0)
);

const totalTasks = currentUnitData ? currentUnitData.task.length : 0;



const [speachbubbleText, setSpeachbubbleText] = useState("");

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
  setSpeachbubbleText("");
  setSelectedAnswer("");
  setReasonText("");
  setNextSimulatorPage((prev) => prev + 1);

  if (currentTaskIndex === totalTasks - 1) {
    setCurrentTaskIndex(0);
    setCurrentUnitIndex((prevIndex) => prevIndex + 1);
  }
}, 300);
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
        <div className="currentFrame" key={index}>
            {currentTaskIndex === index && (
  <div className="frame" key={index}>
   {tasks.step.map((step, stepIndex) => (
  step.speachbubble && <Speachbubble key={stepIndex} text={speachbubbleText || step.speachbubble} reason={reasonText}/>
  ))}
    <PhoneSimulator content={tasks.content} selectedAnswer={selectedAnswer} nextPage={nextSimulatorPage}/>
    <div className="boxContainer">
    <div className={`answerContainer ${answersLength[index] >= 4 ? "fourOrMore" : "smallerThenFour"}`}>
      {tasks.step.map((answer, stepIndex) => (
  answer.answerboxes &&
  answer.answerboxes.map((answerObj, boxIndex) => (
    <AnswerBoxes
      key={`${stepIndex}-${boxIndex}`}
      type={answerObj.type}
      text={answerObj.answer}
      onClick={() => handleSubmit(answerObj.answer, answerObj.right, answer?.rightAnswer, answer?.wrongAnswer, answer?.reason)}
      isCorrect={answerObj.right}
      imageUrl={answerObj.answer}
      imgAnswer={answerObj.imgAnswer}
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
