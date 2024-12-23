import React, { useState } from "react";
import "./PopUpResultScreen.css";
import OpenResultUnit1 from "../../images/PopUpResultImages/OpenResultUnit1.svg";
import ClosedResultBox from "../../images/PopUpResultImages/ClosedResultBox.svg";
import OpenResultUnit2 from "../../images/PopUpResultImages/OpenResultUnit2.svg";
import OpenResultUnit3 from "../../images/PopUpResultImages/OpenResultUnit3.svg";
import OpenResultUnit4 from "../../images/PopUpResultImages/OpenResultUnit4.svg";
import GoodFoxResultReward from "../../images/PopUpResultImages/GoodFoxResultReward.svg";
import CustomButton from "../Button/CustomButton";
import { Link } from "react-router-dom";

export default function PopUpResultScreen({ open, unit }) {
  const [openBox, setOpenBox] = useState(false);
  const [imageSrc, setImageSrc] = useState(ClosedResultBox);
  const [showText, setShowText] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(true);

  function getOpenBoxImage(unit) {
    switch (unit) {
      case "default":
        return OpenResultUnit1;
      case "unit1":
        return OpenResultUnit1;
      case "unit2":
        return OpenResultUnit2;
      case "unit3":
        return OpenResultUnit3;
      case "unit4":
        return OpenResultUnit4;
      default:
        return OpenResultUnit1;
    }
  }

  const handleBoxOpen = () => {
    setOpenBox(true);
    setImageSrc(getOpenBoxImage(unit));
    setButtonStatus(false);
    setShowText(false);
  };

  return (
    <div className={`containerDialogResult ${open ? "open" : ""}`}>
      <div className="dialogWrapper">
        <div className="dialog-logo-outside">
          <img src={GoodFoxResultReward} alt="Fuchs" className="foxImage" />
        </div>

        <div className="dialog">
          <div className="contentResultPopUp">
            {showText && (
              <h2
                className="dialogText h5"
                style={{
                  marginTop: 30,
                  color: "#E54E17",
                  textAlign: "center",
                }}>
                Sehr gut 🌟 Du hast echt das Zeug zu einem Meisterdetektiv zu
                werden!
              </h2>
            )}
            <div className="dialogContent" style={{ textAlign: "center" }}>
              <div className="imageDiv">
                <img
                  align={"center"}
                  onClick={handleBoxOpen}
                  src={imageSrc}
                  alt="ClosedBox"
                  style={{ cursor: "pointer" }}
                />
              </div>
              {showText && (
                <h2
                  className="dialogText"
                  style={{ marginTop: 25, color: "#000000" }}>
                  Klicke auf die Schatztruhe, um deine Belohnung einzusammeln!
                </h2>
              )}
              {!showText && (
                <h2
                  className="dialogText"
                  style={{ marginTop: 20, color: "#000000" }}>
                  Super! Du hast eine Belohnung erhalten!
                </h2>
              )}
              {!buttonStatus && (
                <div
                  className="dialogActions"
                  style={{ marginTop: 20, marginBottom: 5, width: "100%" }}>
                  <Link
                    to={`/result/${unit}/step1`}
                    style={{ textDecoration: "none", width: "100%" }}>
                    <div className="btn-cstm-width">
                      <CustomButton
                        name="Schau dir deine Ergebnisse an!"
                        type="quinary"
                      />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
