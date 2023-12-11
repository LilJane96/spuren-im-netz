import React from "react";
import CostumButton from "../Button/CustomButton.js"
import "./AnswerBoxes.css"

export default function AnswerBoxes({text, onClick}) {

    return (
        <CostumButton className="AnswerBoxesComponent" onClick={onClick} name={text} type="tertiary">
        </CostumButton>
         
    )
}

