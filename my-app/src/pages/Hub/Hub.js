import React, { useState, useEffect } from "react";
import "./Hub.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhoneMap from "../../images/PhoneMap.png";
import Pin1Active from "../../images/Pins/Pin1Active.png";
import Pin2Active from "../../images/Pins/Pin2Active.png";
import Pin2Inactive from "../../images/Pins/Pin2Inactive.png";
import Backpack from "../../images/Backpack.svg";
import FoxPicture from "../../images/foxPicture.svg";
import PopUpChooseName from "../../components/PopUpChooseName/PopUpChooseName";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import BackpackPopup from "../../components/BackpackPopup/BackpackPopup";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import { Link } from "@mui/material";
import StopPopup from "../../components/StopPopup/StopPopup";

function Hub() {
  const [open, setOpen] = useState(false);
  const [openFoxProfile, setOpenFoxProfile] = useState(false);
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const [openBackpack, setOpenBackpack] = useState(false);
  const [units, setUnits] = useState({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getStoredUnits = () => {
      try {
        const storedUnits =
          JSON.parse(localStorage.getItem("UnitsArray")) || {};
        setUnits(storedUnits);
      } catch (err) {
        console.log("Error fetching local data");
      }
    };

    const setUserProfilePicture = () => {
      if (units.unit1?.done) {
        const profilePic = units.unit1.answers.find(
          (obj) => obj.question === "Profilbild"
        )?.answer;
        setProfileImage(profilePic);
      }
    };
    getStoredUnits();
    setUserProfilePicture();
  }, [units.unit1?.done]);

  const handleOpenPopup = () => {
    setOpen(true);
  };
  const handleOpenUserProfile = () => {
    setOpenUserProfile(true);
  };
  const handleOpenFoxProfile = () => {
    setOpenFoxProfile(true);
  };
  const handleOpenBackpack = () => {
    setOpenBackpack(true);
  };

  const handleOpenUnit = (unit) => {
    navigate("/introduction/" + unit);
  };
  const toggleSidebarVisibility = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return (
    <div className="hub">
      <div className="HeaderContainer">
        <div className="upperLeftOptions">
          <div className="foxProfileContainer">
            <img
              className="fox"
              src={FoxPicture}
              alt="Fox"
              onClick={handleOpenFoxProfile}
            />
          </div>
          <div className="UserProfileContainer">
            {units.unit1?.done ? (
              <img
                className="UserProfile"
                src={profileImage}
                alt="UserProfile"
                onClick={handleOpenUserProfile}
              />
            ) : (
              <img alt={""} />
            )}
          </div>
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
          <img
            onClick={() => handleOpenUnit("unit3")}
            src={Pin1Active}
            alt="Unit 3"
          />
        </div>
      </div>
      <div>
        <PopUpChooseName open={open}></PopUpChooseName>
      </div>
      {openUserProfile && (
        <div className="ProfileViewContainer">
          <div className="closeProfile">
            <CustomButton
              type="quaternary"
              onClick={() => setOpenUserProfile(false)}
            />
          </div>
          <div className="UserProfileView">
            <PhoneSimulator title={"Profil"} content={13} />
          </div>
        </div>
      )}
      {openFoxProfile && (
        <div className="ProfileViewContainer">
          <div className="closeProfile">
            <CustomButton
              type="quaternary"
              onClick={() => setOpenFoxProfile(false)}
            />
          </div>
          <div className="ProfileView">
            <PhoneSimulator title={"Profil"} content={12} />
          </div>
        </div>
      )}
      <div className="bottomContainer">
        <div className="restartButton">
          <Link href="/">
            <CustomButton
              name="Spiel neu starten"
              type="primary"
            ></CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hub;
