import React from "react";
import "./Inputfield.css";

export default function Inputfield({
  placeholder,
  value,
  readOnly,
  onChange,
  type,
  width,
  height,
}) {
  return (
    <div className="InputfieldContainer">
      <input
        type={type}
        className="inputfieldComponent"
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        style={{ width: `${width}`, height: `${height}` }}></input>
    </div>
  );
}
