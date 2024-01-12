import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewOne.png";
import "./FinalFrameOne.css";
import Speachbubble from "../Speachbubble/Speachbubble";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function FinalFrameOne() {
  const navigate = useNavigate();
  useEffect(() => {
    // Speichere das aktuelle Body-Hintergrundbild
    const originalBackground = document.body.style.backgroundImage;

    // Setze das neue Hintergrundbild für den Body
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Aufräumen beim Verlassen der Komponente
    return () => {
      // Setze das ursprüngliche Hintergrundbild zurück
      document.body.style.backgroundImage = originalBackground;
    };
  }, []);

  const handleNextStep = () => {
    navigate("/finishedGame/step3");
  };
  return (
    <div className="FinalFrameOneContainer">
      <div className="SpeechbubbleContainer">
        <Speachbubble text="Something like: Oh no turns out the stranger is the bad fox. He is busted and is running back to his crib. I have to go catch him.. etc " />
      </div>

      <div>
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
