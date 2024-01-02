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
          case "quaternary":
            return "CustomButton QuaternaryButton";
        default:
          return "CustomButton";
    }
}

export default function CustomButton({name, onClick, type, disabled}) {
    const buttonClass = getButtonClass(type);
 
    return (
        <div>
            <button className={buttonClass} onClick={onClick} disabled={disabled}>{name}</button>
        </div>
         
    )
}

