import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewFour.png";
import "./FinalFrameFour.css";
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
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.height = "100vh";

    // Aufräumen beim Verlassen der Komponente
    return () => {
      // Setze das ursprüngliche Hintergrundbild zurück
      document.body.style.backgroundImage = originalBackground;
    };
  }, []);

  const handleNextStep = () => {
    navigate("/finishedGame/step6");
  };

  return (
    <div className="FinalFrameFourContainer">
      <div className="SpeechbubbleContainer">
        <Speachbubble text="Wow, viele der Leute, die auch in der Gruppe waren, melden die Gruppe sodass sie gesperrt wird." />
      </div>

      <div className="button">
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
