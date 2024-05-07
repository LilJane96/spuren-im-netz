import React, { useState, useEffect } from "react";
import IntroductionArray from "../../utilis/Introduction";
import "./GameIntroduction.css";
import CustomButton from "../../components/Button/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";

export default function GameIntroduction() {
  const [currentStep, setCurrentStep] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");
  const navigate = useNavigate();
  const { unitId } = useParams();

  // Call the IntroductionArray function to get the array based on unitId
  const introductionData = IntroductionArray().find(
    (item) => item.name === unitId
  );

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
    return null;
  }

  const handleContinueClick = () => {
    if (currentStep < introductionData.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(introductionData.navigate);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
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
          <div className="EndUnit">
            <CustomButton type="quaternary" onClick={handleEndUnit} />
          </div>
          <div
            className="IntroductionText"
            style={{
              justifyContent:
                unitId === "GameIntroduction" ? "flex-end" : "space-between",
              justifyContent: obj.speechbubblePosition || "center",
              alignItems: obj.elementPostion ? obj.elementPostion : "",
            }}>
            <div>{obj.component && <PhoneSimulator content={12} />}</div>
            {obj.text ? (
              <p
                className="textBubble"
                style={{
                  width:
                    obj.speechbubbleSize === "big"
                      ? "620px"
                      : obj.speechbubbleSize === "middle"
                      ? "553px"
                      : obj.speechbubbleSize === "small"
                      ? "428px"
                      : "620px",
                  padding:
                    unitId === "GameIntroduction" ? "40px 18px" : "25px 18px",
                  margin:
                    unitId === "GameIntroduction"
                      ? obj.speechbubbleMargin || "0"
                      : "0 auto",
                }}>
                {obj.text}
              </p>
            ) : (
              <div
                className="placeholder"
                style={{ height: "130px", width: "775px" }}></div>
            )}
          </div>
          <div
            className="SpeechBubble"
            style={{
              alignSelf: obj.speechbubblePosition || "center",
              width:
                obj.speechbubbleSize === "big"
                  ? "300px"
                  : obj.speechbubbleSize === "middle"
                  ? "200px"
                  : "150px",
            }}></div>
        </div>
      ))}

      <div className="ButtonContainer">
        {currentStep > 0 ? (
          <CustomButton onClick={handleGoBack} name="Zurück" type="secondary" />
        ) : (
          <CustomButton
            onClick={handleGoBack}
            name="Zurück"
            type="secondary"
            disabled
          />
        )}
        {currentStep < introductionData.steps.length - 1 ? (
          <CustomButton
            name="Weiter"
            type="primary"
            onClick={handleContinueClick}
          />
        ) : (
          <CustomButton
            name="Spiel starten"
            type="primary"
            onClick={handleContinueClick}
          />
        )}
      </div>
    </div>
  );
}
