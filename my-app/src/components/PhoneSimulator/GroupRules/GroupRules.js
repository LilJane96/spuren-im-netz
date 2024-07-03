import { useState, useEffect } from "react";
import CheckMark from "../../../images/unit3/Check.svg";

import "./GroupRules.css";

export default function MessageOfStranger({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("Alle");

  const answers = ["Alle", "Meine Kontakte", "Meine Kontakte, außer..."];

  useEffect(() => {
    setSelectedAnswer(answer);
  }, [answer]); 

  return (
    <div className="GroupRules">

      <p className="Headline">
        Gruppen
      </p>

      <p className="Subtitle">
        Wer kann mich zu Gruppen hinzufügen?
      </p>

      <div className="RulesContainer">

      {answers.map((entry, index) => (
        <div className={`Rule${selectedAnswer === entry ? ' selected' : ''}`} key={index} style={{ opacity: selectedAnswer === entry ? 1 : 0.7 }}>
          <p>{entry}</p>
          {selectedAnswer === entry && <img src={CheckMark} alt="Ausgewählt" className="CheckMark" />}
        </div>
      ))}

      </div>
    </div>
  );
}
