import React, { useState, useEffect } from "react";
import IntroductionArray from "../../utilis/Introduction";
import "./GameIntroduction.css";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";

export default function GameIntroduction() {
  const [currentStep, setCurrentStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");
  const navigate = useNavigate();
  const { unitId } = useParams();
  console.log("unitId", unitId);

  // Call the IntroductionArray function to get the array based on unitId
  const introductionData = IntroductionArray().find(
    (item) => item.name === unitId
  );

  console.log("introductionData", introductionData);

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
      navigate(introductionData.navigate);
    }
  };

  const handleGoBack = () => {
    if (currentStep >= introductionData.steps.length - 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEndUnit = () => {
    navigate(introductionData.backTo);
  };

  return (
    <div
      className="GameIntroductionContainer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      {introductionData.steps.map((obj, index) => (
        <div
          key={obj.step}
          style={{ display: index === currentStep ? "block" : "none" }}>
          <div
            className="IntroductionText"
            style={{
              justifyContent:
                unitId === "GameIntroduction" ? "flex-end" : "space-between",
            }}>
            {obj.text ? (
              <p
                className="textBubble"
                style={{
                  width: unitId === "GameIntroduction" ? "600px" : "740px",
                  padding:
                    unitId === "GameIntroduction" ? "40px 18px" : "25px 18px",
                  margin: unitId === "GameIntroduction" ? "0" : "0 auto",
                }}>
                {obj.text}
              </p>
            ) : (
              <div
                className="placeholder"
                style={{ height: "130px", width: "775px" }}></div>
            )}
            <div className="EndUnit">
              <CustomButton type="quaternary" onClick={handleEndUnit} />
            </div>
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
