import * as React from "react";
import "./PopUpChooseName.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import CustomButton from "../Button/CustomButton";
import List from "@mui/material/List";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSelectedColor } from "../../utilis/colorUtils";
import "./PopUpChooseName.css";

const PopUpChooseName = ({ open }) => {
  const [selectedColor, setSelectedColor] = useState(getSelectedColor());
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedColor = localStorage.getItem("selectedColor");
    if (storedColor) {
      setSelectedColor(storedColor);
      document.documentElement.setAttribute("data-theme", storedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", inputValue);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIconClick = (color) => {
    setSelectedColor(color);
    document.documentElement.setAttribute("data-theme", color);
  };

  const handleContinueClick = () => {
    localStorage.setItem("userName", inputValue);
    localStorage.setItem("selectedColor", selectedColor);
    navigate("/frameone/unit1/step1");
  };

  return (
    <div className="PopUpChooseName">
      <Dialog
        sx={{
          "& .MuiDialog-paper": { width: 608, height: 612, borderRadius: 5 },
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
              <input
                className="NameInputField"
                value={inputValue}
                placeholder="Name"
                onChange={handleInputChange}></input>
            </div>
          </div>
          <div className="ColorContainer">
            <DialogTitle
              className="dialogTitleH4"
              variant={"h4"}
              style={{ padding: "30px 0 10px" }}>
              {" "}
              Wähle deine Lieblingsfarbe!
            </DialogTitle>
            <DialogContent className="dialogContent">
              <DialogContentText textAlign={"center"}>
                <List sx={{ display: "flex", justifyContent: "center" }}>
                  <ListItemButton
                    onClick={() => handleIconClick("green")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#23FA00", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("red")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#FA0000", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("blue")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#00A6FB", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("orange")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#FF6100", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("yellow")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#FAD200", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("pink")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#E900FA", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleIconClick("purple")}
                    style={{ padding: 0 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{ color: "#5F00FA", fontSize: 56 }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        </div>
        <DialogActions style={{ justifyContent: "center", marginBottom: 15 }}>
          {inputValue.length > 0 && selectedColor.length > 0 ? (
            <CustomButton
              name="Weiter"
              type="primary"
              onClick={handleContinueClick}></CustomButton>
          ) : (
            <CustomButton
              name="Weiter"
              type="primary"
              disabled={true}></CustomButton>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpChooseName;
