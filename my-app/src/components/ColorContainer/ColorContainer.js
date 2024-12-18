import React, { useEffect, useState } from "react";
import { DialogContent, DialogTitle } from "@mui/material";
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
    console.log(
      "document",
      document.documentElement.getAttribute("data-theme")
    );
  };

  return (
    <div className="ColorContainer">
      <DialogTitle
        className="dialogTitleH4"
        variant={headingsize}
        style={{ padding: "30px 0 10px" }}>
        Wähle deine Lieblingsfarbe!
      </DialogTitle>
      <DialogContent className="dialogContent">
        <div style={{ textAlign: "center" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li
              onClick={() => handleIconClick("yellow")}
              style={{
                display: "inline-block",
                margin: "0 10px",
                cursor: "pointer",
              }}>
              <div
                className="colorCircle yellow"
                style={{
                  backgroundColor: "#FFEEAE",
                  border: "6px solid #FEBD01",
                  borderRadius: "30px",
                  width: "40px",
                  height: "40px",
                  display: "inline-block",
                }}
              />
            </li>
            <li
              onClick={() => handleIconClick("blue")}
              style={{
                display: "inline-block",
                margin: "0 10px",
                cursor: "pointer",
              }}>
              <div
                className="colorCircle blue"
                style={{
                  backgroundColor: "#AEDDFF",
                  border: "6px solid #5780F0",
                  borderRadius: "30px",
                  width: "40px",
                  height: "40px",
                  display: "inline-block",
                }}
              />
            </li>
            <li
              onClick={() => handleIconClick("pink")}
              style={{
                display: "inline-block",
                margin: "0 10px",
                cursor: "pointer",
              }}>
              <div
                className="colorCircle pink"
                style={{
                  backgroundColor: "#F87793",
                  border: "6px solid #C64470",
                  borderRadius: "30px",
                  width: "40px",
                  height: "40px",
                  display: "inline-block",
                }}
              />
            </li>
          </ul>
        </div>
      </DialogContent>
    </div>
  );
}
