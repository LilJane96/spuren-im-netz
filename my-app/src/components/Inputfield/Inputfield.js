import React from "react";
import "./Inputfield.css"

export default function Inputfield({placeholder, value, onChange, type}) {
    return (
        <div className="InputfieldContainer">
           <input type={type} className="inputfieldComponent" placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}

