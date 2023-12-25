import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link} from "@mui/material";
import "./PopUpResultScreen.css"
import OpenResultBox from "../../images/OpenResultBox.png";
import CloseResultBox from "../../images/ClosedResultBox.png";
import React, {useState} from "react";
import CustomButton from "../Button/CustomButton";

export default function PopUpResultScreen({ open }) {

    const [openBox, setOpenBox] = useState(false);
    const [imageSrc, setImageSrc] = useState(CloseResultBox);
    const [imageSrcWidth, setImageSrcWidth] = useState("25%")
    const [showText, setShowText] = useState(true);
    const handleBoxOpen = () => {
        setOpenBox(true);
        setImageSrc(OpenResultBox);
        setShowText(false)
        setImageSrcWidth("56%")
    };

    return (
        <div className="containerDialogResult">
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '100%', height: 600 } }}
                open={open}
                maxWidth={"md"}

            >
                <div className="contentResultPopUp">
            <DialogContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1'
            }} >
                {showText && (
                    <DialogTitle textAlign={"center"} variant={"h4"}>Sehr gut 🌟 Du hast echt das Zeug zu einem Meisterdetektiv zu werden!
                </DialogTitle>
                    )}
                {!showText && (
                <DialogContentText variant={"h4"} >
                    Klasse gemacht!
                </DialogContentText>
            )}
                <img  align={"center"} onClick={handleBoxOpen}  src={imageSrc} alt="ClosedBox" style={{width: imageSrcWidth, cursor: 'pointer', margin: '45px' }}/>
                {showText && (
                    <DialogContentText variant={"h6"}>
                        Klicke auf die Schatztruhe, um deine Belohnung einzusammeln!
                    </DialogContentText>
                )}
                {!showText && (
                    <DialogContentText variant={"h4"} >
                        Du hast eine Lupe erhalten!
                    </DialogContentText>
                )}
                <DialogActions style={{justifyContent: "center" , marginBottom: 10}} >
                    <Link href="/hub"><CustomButton name="Weiter" type="primary"></CustomButton></Link>
                </DialogActions>
            </DialogContent>
                </div>

            </Dialog>

        </div>
    );
}