import React, { useEffect, useState } from "react";
import backgroundImage from "../../images/Final/FinalViewThree.png";
import "./FinalFrameThree.css";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";
import PopUpResultScreen from "../PopUpResultScreen/PopUpResultScreen";

export default function FinalFrameThree() {
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
    <div className="FinalFrameThreeContainer">
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
      {openBox && (
        <PopUpResultScreen open={openBox} unit="unit2"></PopUpResultScreen>
      )}
    </div>
  );
}
