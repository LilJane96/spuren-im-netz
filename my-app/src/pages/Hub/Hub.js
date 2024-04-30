import React, { useState, useEffect } from "react";
import "./Hub.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhoneMap from "../../images/PhoneMap.png";
import Pin1Active from "../../images/Pins/Pin1Active.png";
import Pin2Active from "../../images/Pins/Pin2Active.png";
import Pin2Inactive from "../../images/Pins/Pin2Inactive.png";
import Backpack from "../../images/Backpack.png";
import FoxPicture from "../../images/foxPicture.png";
import PopUpChooseName from "../../components/PopUpChooseName/PopUpChooseName";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import BackpackPopup from "../../components/BackpackPopup/BackpackPopup";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import zIndex from "@mui/material/styles/zIndex";

function Hub() {
  const [open, setOpen] = useState(false);
  const [openFoxProfile, setOpenFoxProfile] = useState(false);
  const [openBackpack, setOpenBackpack] = useState(false);
  const [units, setUnits] = useState({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUnits = JSON.parse(localStorage.getItem("UnitsArray")) || {};
    setUnits(storedUnits);
  }, []);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleOpenFoxProfile = () => {
    setOpenFoxProfile(true);
  };

  const handleOpenBackpack = () => {
    setOpenBackpack(true);
  };

  const handleOpenUnit = (obj) => {
    navigate("/introduction/unit2");
  };

  const toggleSidebarVisibility = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="hub">
      <div className="HeaderContainer">
        <div className="foxProfileContainer">
          <img
            className="fox"
            src={FoxPicture}
            alt="Fox"
            onClick={handleOpenFoxProfile}
          />
        </div>
        <div className="upperRightOptions">
          <img
            className="backpack"
            src={Backpack}
            alt="Backpack"
            onClick={handleOpenBackpack}
          />
          {openBackpack && (
            <BackpackPopup
              open={openBackpack}
              onClose={() => setOpenBackpack(false)}
            />
          )}
          {!sidebarCollapsed && (
            <Sidebar toggleSidebarVisibility={toggleSidebarVisibility} />
          )}
          {sidebarCollapsed && (
            <CustomButton type="senary" onClick={toggleSidebarVisibility} />
          )}
        </div>
      </div>
      <div className="MapContainer">
        <img className="map" src={PhoneMap} alt="Map" />
        <div className="pins">
          <img
            onClick={handleOpenPopup}
            className="pinOne"
            src={Pin1Active}
            alt="Unit 1"
          />
          {units.unit1?.done ? (
            <img
              onClick={() => handleOpenUnit("unit2")}
              className="pinTwoActive"
              src={Pin2Active}
              alt="Unit 2"
            />
          ) : (
            <img className="pinTwoInactive" src={Pin2Inactive} alt="Unit 2" />
          )}
        </div>
      </div>
      <div>
        <PopUpChooseName open={open}></PopUpChooseName>
      </div>
      {openFoxProfile && (
        <div className="ProfileViewContainer">
          <div className="closeProfile">
            <CustomButton
              type="quaternary"
              onClick={() => setOpenFoxProfile(false)}
            />
          </div>
          <div className="ProfileView">
            <div>
              <PhoneSimulator 
              title={"Profil"}
              content={12} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hub;
