import { useState } from "react";
import CheckMark from "../../../images/unit3/Check.svg";


import "./GroupRules.css";

export default function MessageOfStranger({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("Alle");

  const answers = ["Alle", "Meine Kontakte", "Meine Kontakte, außer ..."];

  const handleRuleClick = (rule) => {
    setSelectedAnswer(rule);
  };

  return (
    <div className="GroupRules">

      <p className="Headline">
        Gruppen
      </p>

      <p className="Subtitle">
        Wer kann mich Gruppen hinzufügen?
      </p>

      <div className="RulesContainer">

        {answers.map((answer, index) => (
          <div className="Rule" key={index} onClick={() => handleRuleClick(answer)}>
            <p>{answer}</p>
            {selectedAnswer === answer && <img src={CheckMark} alt="Ausgewählt" className="CheckMark" />}
          </div>
        ))}

      </div>
    </div>
  );
}
