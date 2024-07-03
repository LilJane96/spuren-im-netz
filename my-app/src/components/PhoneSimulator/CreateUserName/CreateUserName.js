import { useState } from "react";
import Inputfield from "../../Inputfield/Inputfield";
import "./CreateUserName.css";

export default function CreateUserName({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className="CreateAccountContainer">
      <div className="frameContainer">
        <div className="titleContainer">
          <h3>Name für dein Konto</h3>
        </div>
        <div>
          <div className="InputContainer" style={{ margin: "15px 0" }}>
            <Inputfield
              style={{ width: "100%" }}
              placeholder="Benutzername"
              value={answer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              pointerEvents="none"></Inputfield>
          </div>
        </div>
      </div>
    </div>
  );
}
