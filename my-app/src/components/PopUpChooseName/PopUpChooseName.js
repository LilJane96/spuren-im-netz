import * as React from "react";
import "./PopUpChooseName.css";
import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSelectedColor } from "../../utilis/colorUtils";
import "./PopUpChooseName.css";
import ColorContainer from "../ColorContainer/ColorContainer";
import Inputfield from "../Inputfield/Inputfield";
import { v4 as uuidv4 } from "uuid";
import ScormCloudApp, {
  createRegistration,
  handleRegistration,
} from "../../api/scormCloud";

const PopUpChooseName = ({ open }) => {
  const [selectedColor, setSelectedColor] = useState(getSelectedColor());
  const [inputValue, setInputValue] = useState("");
  const [courseValue, setCoursetValue] = useState("");
  const [classValue, setClassValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCourseValueChange = (event) => {
    setCoursetValue(event.target.value);
  };

  const handleClassValueChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleContinueClick = async () => {
    const registrationId = uuidv4();
    const learnerId = uuidv4();

    localStorage.setItem("userName", inputValue);
    localStorage.setItem("registrationId", registrationId);
    localStorage.setItem("userUUID", learnerId);
    localStorage.setItem("classValue", classValue);

    try {
      await handleRegistration(
        courseValue,
        registrationId,
        registrationId,
        "USER",
        registrationId
      );

      // Navigiere nur, wenn handleRegistration erfolgreich war
      navigate("/introduction/GameIntroduction");
    } catch (err) {
      console.log("Registrierung fehlgeschlagen", err);
      alert(
        "Die Registrierung war nicht erfolgreich. Bitte versuche es erneut."
      );
    }
  };

  return (
    <div className={`PopUpChooseName ${open}`}>
      <div className="dialog" open={open} maxWidth={"md"}>
        <h2 className="dialogTitleH2">Bevor wir starten!</h2>
        <div className="InputContainer">
          <div className="NameContainer">
            <h3>Wie heißt du?</h3>
            <div className="NameInputFieldContainer">
              <div>
                <Inputfield
                  placeholder="Name"
                  value={inputValue}
                  onChange={handleInputChange}
                  width="523px"
                  height="30px"
                  readOnly={false}
                  type="text"></Inputfield>
              </div>
              <div>
                <Inputfield
                  placeholder="Kurs ID"
                  value={courseValue}
                  onChange={handleCourseValueChange}
                  width="523px"
                  height="30px"
                  type="text"></Inputfield>
              </div>
              <div>
                <Inputfield
                  placeholder="Klasse"
                  value={classValue}
                  onChange={handleClassValueChange}
                  width="523px"
                  height="30px"
                  type="text"></Inputfield>
              </div>
            </div>
          </div>

          <ColorContainer headingsize={"h6"} />
        </div>
        <DialogActions style={{ justifyContent: "center", marginBottom: 15 }}>
          {inputValue.length > 0 && selectedColor.length > 0 ? (
            <div className="btn-cstm-width">
              <CustomButton
                name="Weiter"
                type="quinary"
                onClick={handleContinueClick}></CustomButton>
            </div>
          ) : (
            <div className="btn-cstm-width">
              <CustomButton
                name="Weiter"
                type="quinary"
                disabled={true}></CustomButton>
            </div>
          )}
        </DialogActions>
      </div>
    </div>
  );
};

export default PopUpChooseName;
