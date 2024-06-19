import React, { useEffect, useState } from "react";
import backgroundImage from "../../images/Final/FinalViewNine.png";
import "./FinalFrameNine.css";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";
import PopUpResultScreen from "../PopUpResultScreen/PopUpResultScreen";

export default function FinalFrameNine() {
  const [openBox, setOpenBox] = useState(false);

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
      // Setze das ursprüngliche Hintergrundbild zurück
      document.body.style.backgroundImage = originalBackground;
    };
  }, []);

  const handleNextStep = () => {
    setOpenBox(true);
  };
  return (
    <div className="FinalFrameNineContainer" onClick={handleNextStep}>

      <div className="SpeechbubbleContainer">
        <div className="Bubble">
        Hier für dich!
        <br></br>
        Klick es an, um deine Belohnung zu erhalten.
        </div>
      </div>

      <div className="ButtonContainer">
        <div className="button">
          <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
        </div>
      </div>
      {openBox && (
        <PopUpResultScreen open={openBox} unit="unit4"></PopUpResultScreen>
      )}
    </div>
  );
}
