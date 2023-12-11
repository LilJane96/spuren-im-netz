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

const currentUnitData = units[currentUnitIndex];
   
const totalTasks = currentUnitData ? currentUnitData.task.length : 0;



  const handleSubmit = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => prevIndex + 1);

    if (currentTaskIndex === totalTasks - 1) {
      setCurrentTaskIndex(0);
      setCurrentUnitIndex((prevIndex) => prevIndex + 1);
    }
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
    <Speachbubble text={tasks.step.map((obj) => obj.speachbubble)} />
    <PhoneSimulator content={tasks.content} selectedAnswer={selectedAnswer} />
    <div className="boxContainer">
      <div className="answerContainer">

      {tasks.step.map((answer, stepIndex) => (
  answer.answerboxes && answer.answerboxes.map((text, boxIndex) => (
    <AnswerBoxes key={`${stepIndex}-${boxIndex}`} text={text} onClick={() => handleSubmit(text)} />
  ))
))}

      </div>
      <div className="buttonContainer">
        {currentTaskIndex < totalTasks - 1 ? (
          <CustomButton onClick={handleNextTask} name="Weiter" type="primary"></CustomButton>
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
