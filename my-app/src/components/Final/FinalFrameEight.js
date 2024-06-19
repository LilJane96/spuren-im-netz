import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewEight.png";
import "./FinalFrameEight.css";
import Speachbubble from "../Speachbubble/Speachbubble";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function FinalFrameEight() {
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
    navigate("/finishedGame/step10");
  };
  return (
    <div className="FinalFrameEightContainer">

      <div className="SpeechbubbleContainer">
        <div className="Bubble">
        Jetzt habe ich das beste Geschenk für Mara! Nachdem ich nochmal genauer bei anderen Produkten hingeschaut habe, konnte ich ein super Geschenk finden. Für deine Hilfe bekommst du von mir auch ein Geschenk!
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
