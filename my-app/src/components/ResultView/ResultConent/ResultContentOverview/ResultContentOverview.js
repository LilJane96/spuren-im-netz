import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeartFilled from "../../../../images/Stepper/HeartActive.svg";
import "./ResultContentOverview.css";

export default function ResultContentOverview({ unitId }) {
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};

  console.log("units", units);

  if (!units[unitId]) {
    return <div>Keine Ergebnisse gefunden</div>;
  }

  return (
    <div className="ResultContentOverview">
      <div className="Description">
        <div className="Text">
          <p>Spitze gemacht!</p>
        </div>
        <div className="DescriptionContainer">
          <div className="Row">
            <div className={`colorBox ${getColorClass(0)}`} />
            <p>{1}. Versuch</p>
            <div className={`colorBox ${getColorClass(1)}`} />
            <p>{2}. Versuch</p>
            <div className={`colorBox ${getColorClass(2)}`} />
            <p>{3}. Versuch</p>
          </div>
        </div>

        <ul className="ResultRowContainer">
          {units[unitId].answers.map((obj, index) => {
            return (
              <li
                className={`List ${getColorClass(obj.wrongAttempts)}`}
                key={index}>
                <div>
                  <p>{obj.question}</p>
                </div>
                <div className="Heart">
                  {obj.wrongAttempts === 0 ? (
                    <div style={{ margin: "7px 0 0 0" }}>
                      <img alt="heart"
                        src={HeartFilled}
                        style={{ width: "33px", height: "29px" }}
                      />{" "}
                    </div>
                  ) : (
                    <FavoriteBorderIcon
                      className="customHeartIcon"
                      style={{ width: "33px", height: "29px" }}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// Funktion, um die Hintergrundfarbenklasse basierend auf dem Versuch zu bestimmen
function getColorClass(attempt) {
  if (attempt === 0) {
    return "one";
  } else if (attempt === 1) {
    return "two";
  } else {
    return "three";
  }
}
