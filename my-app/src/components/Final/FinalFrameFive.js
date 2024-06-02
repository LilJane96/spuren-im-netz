import React, { useEffect } from "react";
import backgroundImage from "../../images/Final/FinalViewFive.png";
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
    navigate("/finishedGame/step7");
  };
  return (
    <div className="FinalFrameTwoContainer">
      <div className="button">
        <CustomButton type="primary" name="Weiter" onClick={handleNextStep} />
      </div>
    </div>
  );
}
