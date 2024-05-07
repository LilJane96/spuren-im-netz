import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import "./PopUpResultScreen.css";
import OpenResultUnit1 from "../../images/OpenResultUnit1.svg";
import ClosedResultBox from "../../images/ClosedResultBox.svg";
import OpenResultUnit2 from "../../images/OpenResultUnit2.svg";
import React, { useState } from "react";
import CustomButton from "../Button/CustomButton";
import ResultPopUpStar1 from "../../images/ResultPopUpStar1.svg";
import ResultPopUpStar2 from "../../images/ResultPopUpStar2.svg";
import ResultPopUpStar3 from "../../images/ResultPopUpStar3.svg";

export default function PopUpResultScreen({ open, unit }) {
  const [openBox, setOpenBox] = useState(false);
  const [imageSrc, setImageSrc] = useState(ClosedResultBox);
  const [imageSrcWidth, setImageSrcWidth] = useState("30%");
  const [showText, setShowText] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(true);

  //default value?
  function getOpenBoxImage(unit) {
    switch (unit) {
      case "default":
        return OpenResultUnit1;
      case "unit1":
        return OpenResultUnit1;
      case "unit2":
        return OpenResultUnit2;
      default:
        return OpenResultUnit1;
    }
  }

  const handleBoxOpen = () => {
    setOpenBox(true);
    setImageSrc(getOpenBoxImage(unit));
    setButtonStatus(false);
    setShowText(false);
    setImageSrcWidth("50%");
  };

  return (
    <div className="containerDialogResult">
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            overflow: "inherit",
            width: "100%",
            height: 600,
          },
        }}
        open={open}
        maxWidth={"md"}>
        <div className="contentResultPopUp">
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "1",
            }}>
            <div className="dialog-logo-outside " />

            <div className="starContainer">
              <img src={ResultPopUpStar1} alt={""} className="leftStar" />
              <div className="rightStars">
                <img src={ResultPopUpStar2} alt={""} />
                <img src={ResultPopUpStar3} alt={""} />
              </div>
            </div>
            <img
              align={"center"}
              onClick={handleBoxOpen}
              src={imageSrc}
              alt="ClosedBox"
              style={{
                width: imageSrcWidth,
                cursor: "pointer",
                margin: "45px",
                marginTop: showText ? "100px" : "0px",
                marginBottom: showText ? "10px" : "10px",
              }}
            />
            {showText && (
              <DialogContentText
                style={{
                  justifyContent: "center",
                  marginTop: 20,
                  marginBottom: 10,
                }}
                variant={"h6"}>
                Klicke auf die Schatztruhe, um deine Belohnung einzusammeln!
              </DialogContentText>
            )}
            {!showText && (
              <DialogContentText variant={"h6"}>
                Super! Du hast eine Belohnung erhalten!
              </DialogContentText>
            )}
            <DialogActions
              style={{
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 5,
              }}>
              <Link href={`/result/${unit}/step1`}>
                <CustomButton
                  disabled={buttonStatus}
                  name="Schau dir deine Ergebnisse an!"
                  type="quinary"
                  style={{ width: "200px" }}></CustomButton>
              </Link>
            </DialogActions>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
