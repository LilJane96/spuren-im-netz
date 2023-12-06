import React from "react";
import "./Inputfield.css"

export default function Inputfield({placeholder}) {

    return (
        <div className="InputfieldContainer">
           <input className="inputfieldComponent" placeholder={placeholder}></input>
        </div>
         
    )
}

