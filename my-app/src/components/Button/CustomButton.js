import React from "react";
import "./CustomButton.css"

export default function CustomButton({name, onClick, type}) {

    const buttonClass = type === "primary" ? "CustomButton PrimaryButton" : "CustomButton SecondaryButton";
    return (
        <div>
            <button className={buttonClass} onClick={onClick}>{name}</button>
        </div>
         
    )
}

