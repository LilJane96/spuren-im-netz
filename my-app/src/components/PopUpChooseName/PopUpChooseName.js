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

const PopUpChooseName = ({ open }) => {
  const [selectedColor, setSelectedColor] = useState(getSelectedColor());
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleContinueClick = () => {
    localStorage.setItem("userName", inputValue);
    navigate("/frameone/unit1/step1");
  };

  return (
    <div className="PopUpChooseName">
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: 608,
            height: 612,
            borderRadius: 5,
            justifyContent: "space-around",
          },
        }}
        open={open}
        maxWidth={"md"}>
        <DialogTitle className="dialogTitleH3" variant={"h3"}>
          Bevor wir starten!
        </DialogTitle>
        <div className="InputContainer">
          <div className="NameContainer">
            <DialogTitle
              className="dialogTitleH4"
              variant={"h4"}
              style={{ padding: "30px 0 10px" }}>
              Wie heißt du?
            </DialogTitle>
            <div className="NameInputFieldContainer">
              <Inputfield
                placeholder="Name"
                value={inputValue}
                onChange={handleInputChange}
                width="523px"
                height="30px"
                readOnly={false}
                type="text"></Inputfield>
            </div>
          </div>
          <ColorContainer headingsize={"h6"} />
        </div>
        <DialogActions style={{ justifyContent: "center", marginBottom: 15 }}>
          {inputValue.length > 0 && selectedColor.length > 0 ? (
            <CustomButton
              name="Weiter"
              type="quinary"
              onClick={handleContinueClick}></CustomButton>
          ) : (
            <CustomButton
              name="Weiter"
              type="quinary"
              disabled={true}></CustomButton>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpChooseName;
