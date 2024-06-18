import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewSeven.png";
import "./FinalFrameSeven.css";
import Speachbubble from "../Speachbubble/Speachbubble";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function FinalFrameSeven() {
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
    navigate("/finishedGame/step9");
  };

  return (
    <div className="FinalFrameSevenContainer">
      <div className="SpeechbubbleContainer">
        <Speachbubble text="Danke für deine Hilfe. Ich habe nun doch ein anderes Geschenk gekauft. Die Werbung kam mir komisch vor! Ich hoffe es wird Mara gefallen." />
      </div>

      <div className="button">
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
