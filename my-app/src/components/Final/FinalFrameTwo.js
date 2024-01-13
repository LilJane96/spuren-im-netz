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
            <p style={{ fontWeight: "light" }}>
              Something like: Oh no turns out the stranger is the bad fox. He is
              busted and is running back to his crib. I have to go catch him..
              etc
            </p>
          </div>
        </div>
      </div>

      <div>
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
