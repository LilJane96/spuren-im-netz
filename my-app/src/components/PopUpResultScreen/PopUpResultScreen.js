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
import OpenResultUnit3 from "../../images/OpenResultUnit3.svg";
import React, { useState } from "react";
import CustomButton from "../Button/CustomButton";

export default function PopUpResultScreen({ open, unit }) {
    const [openBox, setOpenBox] = useState(false);
    const [imageSrc, setImageSrc] = useState(ClosedResultBox);
    const [showText, setShowText] = useState(true);
    const [buttonStatus, setButtonStatus] = useState(true);

    function getOpenBoxImage(unit) {
        switch (unit) {
            case "default":
                return OpenResultUnit1;
            case "unit1":
                return OpenResultUnit1;
            case "unit2":
                return OpenResultUnit2;
            case "unit3":
                return OpenResultUnit3;
            default:
                return OpenResultUnit1;
        }
    }
    const handleBoxOpen = () => {
        setOpenBox(true);
        setImageSrc(getOpenBoxImage(unit));
        setButtonStatus(false);
        setShowText(false);
    };
    return (
        <div className="containerDialogResult">
            <Dialog
                sx={{
                    "& .MuiDialog-paper": {
                        overflow: "inherit",
                        width: "55%",
                    },
                }}
                open={open}
                maxWidth={"md"}>
                <div className="contentResultPopUp">
                    {showText && (
                        <DialogContentText
                        style={{
                            justifyContent: "center",
                            marginTop: 30,
                            color: "#E54E17",
                        }}
                        variant={"h5"}>
                        Sehr gut 🌟 Du hast echt das Zeug zu einem Meisterdetektiv zu werden!
                    </DialogContentText>
                    )}
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
                        <div className="imageDiv">
                        <img
                            align={"center"}
                            onClick={handleBoxOpen}
                            src={imageSrc}
                            alt="ClosedBox"
                            style={{
                                cursor: "pointer",
                            }}
                        />
                        </div>
                        {showText && (
                            <DialogContentText
                                style={{
                                    justifyContent: "center",
                                    marginTop: 25,
                                    color: "#000000",
                                }}
                                variant={"h4"}>
                                Klicke auf die Schatztruhe, um deine Belohnung einzusammeln!
                            </DialogContentText>
                        )}
                        {!showText && (
                            <DialogContentText style={{
                                justifyContent: "center",
                                marginTop: 20,
                            }}variant={"h6"}>
                                Super! Du hast eine Belohnung erhalten!
                            </DialogContentText>
                        )}
                        {!buttonStatus && (
                            <DialogActions
                                style={{
                                    justifyContent: "center",
                                    marginTop: 20,
                                    marginBottom: 5,
                                }}>
                                <Link href={`/result/${unit}/step1`}>
                                    <CustomButton
                                        name="Schau dir deine Ergebnisse an!"
                                        type="quinary"
                                        style={{ width: "200px" }}></CustomButton>
                                </Link>
                            </DialogActions>
                        )}
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}
