import * as React from 'react';
import TextField from '@mui/material/TextField';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Icon,
    Link,
    ListItemIcon
} from "@mui/material";
import CustomButton from "../Button/CustomButton";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { blue } from '@mui/material/colors';
import {useState} from "react";

export default function PopUpChooseName({ open, name }) {

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="PopUpChooseName">
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '100%', height: 500 } }}
                open={open}
                maxWidth={"md"}
                    >
                <DialogTitle variant={"h3"} textAlign={"center"}>Bevor wir starten!</DialogTitle>
                <DialogTitle variant={"h4"} textAlign={"center"}>Wie heißt du?</DialogTitle>
                <TextField
                    margin={"normal"}
                    width={false}
                    size={"medium"}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <DialogTitle textAlign={"center"}>Wähle deine Lieblingsfarbe!</DialogTitle>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <DialogContentText textAlign={"center"} >
                        <List sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon style={{ color: 'yellow' , fontSize: 100 }} />
                                </ListItemIcon>
                                <ListItemText>Gelb</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon  style={{ color: 'blue' , fontSize: 100 }} />
                                </ListItemIcon>
                                <ListItemText>Blau</ListItemText>
                            </ListItem>
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{justifyContent: "center" , marginBottom: 15}}  >
                    <Link href="/frameone"><CustomButton name="Weiter" type="primary"></CustomButton></Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}
