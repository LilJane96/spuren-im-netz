import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewTwo.png";
import "./FinalFrameTwo.css";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function FinalFrameTwo() {
  const navigate = useNavigate();

  useEffect(() => {
    const originalBackground = document.body.style.backgroundImage;

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.height = "100vh";

    // Aufräumen beim Verlassen der Komponente
    return () => {
      document.body.style.backgroundImage = originalBackground;
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.display = "";
      document.body.style.flexDirection = "";
      document.body.style.height = "";
    };
  }, []);
  const handleNextStep = () => {
    navigate("/finishedGame/step4");
  };
  return (
    <div className="FinalFrameTwoContainer">
      <div className="SpeechbubbleContainer">
        <div className="overlay">
          <div className="bubble speech">
            <div className="circle"></div>
            <p style={{fontWeight: "light" }}>
              Oh nein, er rennt in den Wald, schnell hinterher! Ich muss mich beeilen... Ich bin ihm auch schon ganz nah!
            </p>
          </div>
        </div>
      </div>

      <div className="button">
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
