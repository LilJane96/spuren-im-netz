import React from "react";
import "./Inputfield.css"

export default function Inputfield({placeholder, value, onChange}) {
    console.log("VALUE", value)

    return (
        <div className="InputfieldContainer">
           <input className="inputfieldComponent" placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
         
    )
}

