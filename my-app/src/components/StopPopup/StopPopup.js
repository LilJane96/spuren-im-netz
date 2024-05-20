import React, { useState, useEffect } from "react";
import "./StopPopup.css";
import CustomButton from "../Button/CustomButton";
import Stopwatch from "../Stopwatch/Stopwatch";

const Ampel = () => {
  const [isRedActive, setIsRedActive] = useState(true);
  const [popupVisible, setPopupVisible] = useState(true);

  const handleTimeUp = () => {
    setIsRedActive(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {popupVisible && (
        <div className="StopPopupBackground">
          <div className="StopPopupContainer">
            <div className="TextContainer first">
              <p>
                Super gemacht <span>🌟</span> Du hast das Level geschafft!
              </p>
            </div>
            <div className="traffic-light">
              <div className={`light red ${isRedActive ? "active" : ""}`}></div>
              <div
                className={`light green ${!isRedActive ? "active" : ""}`}></div>
            </div>
            <div className="TextContainer second">
              <p>
                Warte bis alle deine Klassenkameraden fertig sind und bespricht
                zusammen eure Ergebnisse.
              </p>
            </div>
            <div className="TimeContainer">
              <div className="CustomButton">
                <CustomButton
                  name="Verstanden"
                  type="primary"
                  onClick={handleClosePopup}
                />
              </div>
              <div className="Stopwatch">
                <Stopwatch initialTime={600} onTimeUp={handleTimeUp} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ampel;
