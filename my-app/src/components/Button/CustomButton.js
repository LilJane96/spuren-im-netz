import React from "react";
import "./CustomButton.css"

const getButtonClass = (type) => {
    switch (type) {
        case "primary":
          return "CustomButton PrimaryButton";
        case "secondary":
          return "CustomButton SecondaryButton";
        case "tertiary":
          return "CustomButton TertiaryButton";
        default:
          return "CustomButton";
    }
}

export default function CustomButton({name, onClick, type}) {

    // const buttonClass = type === "primary" ? "CustomButton PrimaryButton" : "CustomButton SecondaryButton";
    const buttonClass = getButtonClass(type);
 
    return (
        <div>
            <button className={buttonClass} onClick={onClick}>{name}</button>
        </div>
         
    )
}

