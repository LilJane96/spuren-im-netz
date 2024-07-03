import { useState } from "react";
import Inputfield from "../../Inputfield/Inputfield";
import "./CreatePassword.css";

export default function CreatePassword({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className="CreateAccountContainer">
      <div className="frameContainer">
        <div className="titleContainer">
          <h3>Passwort erstellen</h3>
        </div>
        <div>
          <div style={{ margin: "15px 0" }}>
            <Inputfield
              type="password"
              placeholder="Passwort"
              value={answer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              pointerEvents="none"></Inputfield>
          </div>
        </div>
      </div>
    </div>
  );
}
