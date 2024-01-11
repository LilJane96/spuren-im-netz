import React, { useState, useEffect } from "react";
import IntroductionArray from "../../utilis/Introduction";
import "./GameIntroduction.css";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function GameIntroduction() {
  const [currentStep, setCurrentStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");
  const navigate = useNavigate();
  const introductionData = IntroductionArray().filter(
    (item) => item.name === "GameIntroduction"
  )[0];

  // Set the background image when the component mounts or when the step changes
  useEffect(() => {
    setBackgroundImage(
      introductionData.steps[currentStep]?.backgroundImage || ""
    );
  }, [currentStep, introductionData]);

  // Check if introductionData exists and has steps
  if (
    !introductionData ||
    !introductionData.steps ||
    introductionData.steps.length === 0
  ) {
    return null; // Render nothing if data is not available
  }

  const handleContinueClick = () => {
    if (currentStep < introductionData.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/hub");
    }
  };

  const handleGoBack = () => {
    if (currentStep >= introductionData.steps.length - 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div
      className="GameIntroductionContainer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}>
      {introductionData.steps.map((obj, index) => (
        <div
          key={obj.step}
          style={{ display: index === currentStep ? "block" : "none" }}>
          <div className="IntroductionText">
            <p className="textBubble">{obj.text}</p>
          </div>
        </div>
      ))}
      <div className="ButtonContainer">
        {currentStep > 0 ? (
          <CustomButton onClick={handleGoBack} name="Zurück" type="tertiary" />
        ) : (
          <CustomButton
            onClick={handleGoBack}
            name="Zurück"
            type="tertiary"
            disabled
          />
        )}
        <CustomButton
          name="Weiter"
          type="primary"
          onClick={handleContinueClick}
        />
      </div>
    </div>
  );
}
