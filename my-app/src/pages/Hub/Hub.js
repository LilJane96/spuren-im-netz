import React, { useState, useEffect } from "react";
import "./Hub.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Backpack from "../../images/Backpack.svg";
import BoardBackground from "../../images/Hub/Background.png";
import Pin1Unlocked from "../../images/Hub/Level1Unlocked.png";
import Pin2Unlocked from "../../images/Hub/Level2Unlocked.png";
import Pin3Unlocked from "../../images/Hub/Level3Unlocked.png";
import String from "../../images/Hub/String.png";
import Pin2Locked from "../../images/Hub/Level2Locked.png";
import Pin3Locked from "../../images/Hub/Level3Locked.png";
import Pin4Locked from "../../images/Hub/Level4Locked.png";
import FoxPicture from "../../images/foxPicture.svg";
import PopUpChooseName from "../../components/PopUpChooseName/PopUpChooseName";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import BackpackPopup from "../../components/BackpackPopup/BackpackPopup";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";

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
      {/* <div className="MapContainer">
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
      </div> */}
      <div className="BoardContainer">
          <div className="BoardWrapper" style={{position: 'relative'}}>
              <img className="Board" src={BoardBackground}/>
              <img className="Pin" style={{position: 'absolute', top: '10%', left: '20%',  width: '60%', zIndex: '5', pointerEvents: "none"}} src={String} />
              <img className="Pin" style={{position: 'absolute', top: '10%', left: '1%',  width: '30%', zIndex: '2'}} src={Pin1Unlocked} alt="Pin1" 
                onClick={handleOpenPopup}
              />
              {units.unit1?.done ? (
              <img className="Pin" style={{position: 'absolute', top: '13%', left: '32%',  width: '55%'}} src={Pin2Unlocked} alt="Pin2" 
                onClick={() => handleOpenUnit("unit2")}
              />
              ) : (
                <img className="Pin" style={{position: 'absolute', top: '13%', left: '32%',  width: '55%'}} src={Pin2Locked} alt="Pin2" />
              )}
              {units.unit2?.done ? (
              <img className="Pin" style={{position: 'absolute', top: '57%', left: '10%',  width: '35%'}} src={Pin3Unlocked} alt="Pin3" 
                onClick={() => handleOpenUnit("unit3")}
              />
              ) : (
                <img className="Pin" style={{position: 'absolute', top: '57%', left: '10%',  width: '35%'}} src={Pin3Locked} alt="Pin3" />
              )}

              <img className="Pin" style={{position: 'absolute', top: '55%', left: '70%',  width: '20%'}} src={Pin4Locked} alt="Pin4" />

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
    </div>
  );
}

export default Hub;
