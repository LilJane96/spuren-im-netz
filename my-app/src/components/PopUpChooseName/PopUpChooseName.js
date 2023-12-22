import * as React from 'react';
import "./PopUpChooseName.css"
import TextField from '@mui/material/TextField';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link, ListItemButton,
    ListItemIcon
} from "@mui/material";
import CustomButton from "../Button/CustomButton";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useState} from "react";
export default function PopUpChooseName({ open }) {

    const [selectedColor, setSelectedColor] = useState("");
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };
    const handleIconClick = (color) => {
    setSelectedColor(color);
    console.log(selectedColor);
    };
    return (
        <div className="PopUpChooseName">
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '100%', height: 500 } }}
                open={open}
                maxWidth={"md"}
            >
                <DialogTitle className="dialogTitleH3" variant={"h3"}>Bevor wir starten!</DialogTitle>
                <DialogTitle className="dialogTitleH4" variant={"h4"} >Wie heißt du?</DialogTitle>
                <TextField
                    margin={"normal"}
                    width={false}
                    size={"medium"}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <DialogTitle className="dialogTitleH3" >Wähle deine Lieblingsfarbe!</DialogTitle>
                <DialogContent className="dialogContent">
                    <DialogContentText textAlign={"center"} >
                        <List sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <ListItemButton onClick={() => handleIconClick("yellow")}>
                                <ListItemIcon >
                                    <FiberManualRecordIcon style={{ color: 'yellow' , fontSize: 100 }}  />
                                </ListItemIcon>
                                <ListItemText>Gelb</ListItemText>
                            </ListItemButton>
                            <ListItemButton onClick={() => handleIconClick('blue')} >
                                <ListItemIcon>
                                    <FiberManualRecordIcon  style={{ color: 'blue' , fontSize: 100 }} />
                                </ListItemIcon>
                                <ListItemText>Blau</ListItemText>
                            </ListItemButton>
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{justifyContent: "center" , marginBottom: 15}} >
                    <Link href="/frameone/unit1/step1"><CustomButton name="Weiter" type="primary"></CustomButton></Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}