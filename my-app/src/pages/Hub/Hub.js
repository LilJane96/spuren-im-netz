import { React, useState } from "react";
import { Link } from "@mui/material";
import "./Hub.css";
import Onboarding from "../../components/Onboarding/Onboarding";
import PhoneMap from "../../images/PhoneMap.png";
import Pin1Active from "../../images/Pins/Pin1Active.png";
import Backpack from "../../images/Backpack.png";
import FoxPicture from "../../images/foxPicture.png";
import PopUpChooseName from "../../components/PopUpChooseName/PopUpChooseName";
import GoodFoxProfile from "../../components/GoodFoxProfile/GoodFoxProfile";
import CustomButton from "../../components/Button/CustomButton";

function Hub() {
  const [open, setOpen] = useState(false);
  const [openFoxProfile, setOpenFoxProfile] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleOpenFoxProfile = () => {
    setOpenFoxProfile(true);
  };

  return (
    <>
      <Onboarding />
      <div className="hub">
        <img
          className="fox"
          src={FoxPicture}
          alt="Fox"
          onClick={handleOpenFoxProfile}
        />
        <img className="backpack" src={Backpack} alt="Backpack" />
        <img className="map" src={PhoneMap} alt="Map" />
        <div className="pins">
          <img
            onClick={handleOpenPopup}
            className="pinOne"
            src={Pin1Active}
            alt="Pin"
          />
        </div>
        <div>
          <PopUpChooseName open={open}></PopUpChooseName>
        </div>
        <div>
          <GoodFoxProfile
            open={openFoxProfile}
            onClose={() => setOpenFoxProfile(false)}
          />
        </div>
      </div>
    </>
  );
}

export default Hub;
