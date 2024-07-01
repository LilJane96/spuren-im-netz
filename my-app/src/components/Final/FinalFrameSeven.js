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
        <div className="Bubble">
        Danke für deine Hilfe. Ich habe nun ein tolles Geschenk gefunden, nachdem ich mich nochmal genauer informiert habe. Die Werbung war nicht gut, da hat die Beschreibung gar nicht zu dem Produkt gepasst! Ich hoffe es wird Mara gefallen.
        </div>
      </div>

      <div className="ButtonContainer">
        <div className="button">
          <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
        </div>
      </div>
    </div>
  );
}
