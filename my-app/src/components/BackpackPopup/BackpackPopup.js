import React from "react";
import Backpack from "../../images/HubImages/Backpack/Backpack.svg";
import HeadInactive from "../../images/HubImages/Backpack/HeadInactive.svg";
import HeadActive from "../../images/HubImages/Backpack/HeadActive.svg";
import MagnifyingGlassActive from "../../images/HubImages/Backpack/MagnifyingGlassActive.svg";
import MagnifyingGlass from "../../images/HubImages/Backpack/MagnifyingGlass.svg";

import "./BackpackPopup.css";
import CustomButton from "../Button/CustomButton";

export default function BackpackPopup({ open, onClose }) {
  const unitDone = JSON.parse(localStorage.getItem("UnitsArray")) || {};

  const isUnit1Done = unitDone?.unit1?.done || false;
  const isUnit2Done = unitDone?.unit2?.done || false;

  const handleCloseBackpack = () => {
    onClose();
  };

  return (
    <>
      {open && (
        <>
          <div className="CloseBackpack">
            <CustomButton type="quaternary" onClick={handleCloseBackpack} />
          </div>
          <div className="BackpackPopupOverlay">
            <div className="BackpackPopup">
              <p>Dein Rucksack!</p>
            </div>
            <div>
              <img src={Backpack} alt="Rucksack" />
              <div className="BackpackContentContainer">
                {isUnit1Done ? (
                  <img src={HeadActive} alt="Hut" />
                ) : (
                  <img src={HeadInactive} alt="Hut" />
                )}
                {isUnit2Done ? (
                  <img src={MagnifyingGlassActive} alt="Lupe" />
                ) : (
                  <img src={MagnifyingGlass} alt="Lupe" />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
