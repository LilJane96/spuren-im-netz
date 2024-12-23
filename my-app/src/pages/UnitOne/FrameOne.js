import React, { useEffect, useState } from "react";
import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";
import Stepper from "../../components/Stepper/Stepper";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import "./FrameOne.css";
import PopUpResultScreen from "../../components/PopUpResultScreen/PopUpResultScreen";
import UnitOne from "../../Units/UnitOne";
import UnitTwo from "../../Units/UnitTwo";
import UnitThree from "../../Units/UnitThree";
import UnitFour from "../../Units/UnitFour";

export default function FrameOne() {
  const unitsArray = [UnitOne(), UnitTwo(), UnitThree(), UnitFour()];

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [reasonText, setReasonText] = useState("");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [nextSimulatorPage, setNextSimulatorPage] = useState(0);
  const [speachbubbleText, setSpeachbubbleText] = useState("");
  const [count, setCount] = useState(0);
  const { unitId, stepId } = useParams();
  const [currentUnitData, setCurrentUnitData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [openBox, setOpenBox] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(true);

  useEffect(() => {
    const stepFromUrl = parseInt(stepId.replace("step", ""), 10) || 1;
    setCurrentStep(stepFromUrl);
  }, [stepId]);

  useEffect(() => {
    const taskIndex = currentStep - 1;
    setCurrentTaskIndex(taskIndex);
  }, [currentStep]);

  useEffect(() => {
    const unitData = unitsArray.find((unit) => unit.name === unitId);
    setCurrentUnitData(unitData);
  }, [unitId]);

  let units = JSON.parse(localStorage.getItem("UnitsArray")) || {};

  if (!units[unitId]) {
    units[unitId] = {
      topic: "",
      done: false,
      attempts: 0,
      wrongAttempts: 0,
      taskAttempts: {},
      answers: [],
    };
  }

  if (!currentUnitData) {
    return <div>Unit nicht gefunden</div>;
  }

  const answersLength = currentUnitData.task.map((task) =>
    task.step.reduce(
      (acc, step) => acc + (step.answerboxes ? step.answerboxes.length : 0),
      0
    )
  );

  const totalTasks = currentUnitData ? currentUnitData.task.length : 0;

  const findAnswerIndex = (taskIndex) => {
    return units[unitId].answers.findIndex(
      (answer) => answer.taskIndex === taskIndex
    );
  };

  const handleSubmit = (
    question,
    answer,
    isCorrect,
    rightAnswer,
    wrongAnswer,
    reason
  ) => {
    setSelectedAnswer(answer);
    setReasonText(reason);
    setIsAnswerWrong(isCorrect);

    if (!isCorrect) {
      setCount((prevCount) => prevCount + 1);
    }

    const newItem = {
      question: question,
      answer: answer,
      isCorrect: isCorrect,
      taskIndex: currentTaskIndex,
      wrongAttempts: count,
    };

    units[unitId].attempts++;

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
      (units[unitId].taskAttempts[currentTaskIndex] || 0) +
      newItem.wrongAttempts;

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
      const nextStep = currentStep + 1;
      navigate(`/frameone/${unitId}/step${nextStep}`);
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
      const nextStep = currentStep - 1;
      navigate(`/frameone/${unitId}/step${nextStep}`);
    }
  };

  const handleEndUnit = () => {
    navigate(`/hub`);
  };

  const handleGoToResult = () => {
    units[unitId].topic = currentUnitData.topic;
    units[unitId].done = true;
    localStorage.setItem("UnitsArray", JSON.stringify(units));
    if (unitId === "unit1") {
      setOpenBox(true);
    } else if (unitId === "unit2") {
      navigate(`/finishedGame/step1`);
    } else if (unitId === "unit3") {
      navigate(`/finishedGame/step5`);
    } else if (unitId === "unit4") {
      navigate(`/finishedGame/step8`);
    }
  };

  return (
    <div className="frameOneContainer">
      <div className="stepperContainer">
        <Stepper currentStep={currentStep} totalSteps={totalTasks} />
        <CustomButton type="quaternary" onClick={handleEndUnit} />
      </div>
      <div>
        {currentUnitData.task.map((tasks, index) => (
          <div className="currentFrame" key={index}>
            {currentTaskIndex === index && (
              <div className="frameContainer">
                <div className="frame" key={index}>
                  <div className="SpeachbubbleBox">
                    {tasks.step.map((step, stepIndex) =>
                      step.speachbubble ? (
                        <Speachbubble
                          key={stepIndex}
                          text={speachbubbleText || step.speachbubble}
                          reason={reasonText}
                          isCorrect={isAnswerWrong}
                        />
                      ) : null
                    )}
                  </div>
                  <div className="PhoneBox">
                    <PhoneSimulator
                      title={tasks.step.map((obj) => obj.title)}
                      content={tasks.step.map((obj) => obj.phoneSimulatorStep)}
                      selectedAnswer={selectedAnswer}
                      nextPage={currentStep}
                    />
                  </div>
                  <div className="boxContainer">
                    <div
                      className={`answerContainer ${
                        answersLength[index] >= 4
                          ? "fourOrMore"
                          : "smallerThenFour"
                      }`}>
                      {tasks.step.map((answer, stepIndex) =>
                        answer.answerboxes
                          ? answer.answerboxes.map((answerObj, boxIndex) => (
                              <div
                                className="answer"
                                key={`${stepIndex}-${boxIndex}`}>
                                <AnswerBoxes
                                  type={answerObj?.type}
                                  text={answerObj?.answer}
                                  onClick={() =>
                                    handleSubmit(
                                      answer?.question,
                                      answerObj?.answer,
                                      answerObj?.right,
                                      answer?.rightAnswer,
                                      answer?.wrongAnswer,
                                      answer?.reason
                                    )
                                  }
                                  isCorrect={answerObj?.right}
                                  imageUrl={answerObj?.answer}
                                  imgAnswer={answerObj?.imgAnswer}
                                />
                              </div>
                            ))
                          : null
                      )}
                    </div>
                  </div>
                </div>
                <div className="buttonContainer">
                  {currentTaskIndex > 0 ? (
                    <CustomButton
                      onClick={handleGoBack}
                      name="Zurück"
                      type="secondary"
                    />
                  ) : (
                    <CustomButton
                      onClick={handleGoBack}
                      name="Zurück"
                      type="secondary"
                      disabled
                    />
                  )}
                  {currentTaskIndex < totalTasks - 1 ? (
                    selectedAnswer === "" ||
                    !units[unitId]?.answers[currentTaskIndex]?.isCorrect ? (
                      <CustomButton
                        onClick={handleNextTask}
                        name="Weiter"
                        type="primary"
                        disabled
                      />
                    ) : (
                      <CustomButton
                        onClick={handleNextTask}
                        name="Weiter"
                        type="primary"
                      />
                    )
                  ) : selectedAnswer === "" ||
                    !units[unitId]?.answers[currentTaskIndex]?.isCorrect ? (
                    <CustomButton
                      name="Level beenden"
                      type="primary"
                      disabled
                    />
                  ) : (
                    <div>
                      <PopUpResultScreen open={openBox} unit={unitId} />
                      <CustomButton
                        name="Level beenden"
                        type="primary"
                        onClick={handleGoToResult}
                      />
                    </div>
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
