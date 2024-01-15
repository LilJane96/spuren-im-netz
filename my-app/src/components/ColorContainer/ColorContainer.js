import {
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
import { getSelectedColor } from "../../utilis/colorUtils";


export default function ColorContainer({ headingsize }) {
    const [selectedColor, setSelectedColor] = useState(getSelectedColor());

    useEffect(() => {
        const storedColor = localStorage.getItem("selectedColor");
        if (storedColor) {
          setSelectedColor(storedColor);
          document.documentElement.setAttribute("data-theme", storedColor);
        }
    }, []);
    
      const handleIconClick = (color) => {
        setSelectedColor(color);
        document.documentElement.setAttribute("data-theme", color);
    };
    
    const handeSaveClick = () => {
        localStorage.setItem("selectedColor", selectedColor);
    }

  
    return (
        <div className="ColorContainer">
            <DialogTitle
              className="dialogTitleH4"
              variant={headingsize}
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
            <DialogActions style={{ justifyContent: "center", marginBottom: 15 }}>
            <CustomButton
              name="Speichern"
              type="primary"
              onClick={handeSaveClick}></CustomButton>
        </DialogActions>
          </div>
    );
  };