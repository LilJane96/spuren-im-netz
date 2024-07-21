import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getSelectedColor } from "../../utilis/colorUtils";
import "./ColorContainer.css";

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
    // Farbe sofort speichern, wenn sie angeklickt wird
    localStorage.setItem("selectedColor", color);
  };

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
          <ul>
            <li
              onClick={() => handleIconClick("yellow")}
              style={{ padding: 0 }}>
              <div
                className="colorCircle"
                style={{
                  backgroundColor: "#FFEEAE",
                  border: "6px solid #FEBD01",
                  borderRadius: "30px",
                }}
              />
            </li>
            <li onClick={() => handleIconClick("blue")} style={{ padding: 0 }}>
              <div
                className="colorCircle"
                style={{
                  backgroundColor: "#AEDDFF",
                  border: "6px solid #5780F0",
                  borderRadius: "30px",
                }}
              />
            </li>
            <li onClick={() => handleIconClick("pink")} style={{ padding: 0 }}>
              <div
                className="colorCircle"
                style={{
                  backgroundColor: "#F87793",
                  border: "6px solid #C64470",
                  borderRadius: "30px",
                }}
              />
            </li>
          </ul>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
