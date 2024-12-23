import React from "react";
import Backpack from "../../images/HubImages/Backpack/Backpack.svg";
import BackpackUnit1 from "../../images/HubImages/Backpack/BackpackUnit1.svg";
import BackpackUnit2 from "../../images/HubImages/Backpack/BackpackUnit2.svg";
import BackpackUnit3 from "../../images/HubImages/Backpack/BackpackUnit3.svg";
import BackpackUnit4 from "../../images/HubImages/Backpack/BackpackUnit4.svg";

import "./BackpackPopup.css";
import CustomButton from "../Button/CustomButton";

export default function BackpackPopup({ open, onClose }) {
  const unitDone = JSON.parse(localStorage.getItem("UnitsArray")) || {};

  const isUnit1Done = unitDone?.unit1?.done || false;
  const isUnit2Done = unitDone?.unit2?.done || false;
  const isUnit3Done = unitDone?.unit3?.done || false;
  const isUnit4Done = unitDone?.unit4?.done || false;

  const handleCloseBackpack = () => {
    onClose();
  };

  const getBackpackImage = () => {
    const completedUnits = [
      isUnit1Done,
      isUnit2Done,
      isUnit3Done,
      isUnit4Done,
    ].filter(Boolean).length;

    switch (completedUnits) {
      case 0:
        return Backpack;
      case 1:
        return BackpackUnit1;
      case 2:
        return BackpackUnit2;
      case 3:
        return BackpackUnit3;
      case 4:
        return BackpackUnit4;
      default:
        return Backpack;
    }
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
            <div className="BackpackImg">
              <img src={getBackpackImage()} alt="Backpack" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
