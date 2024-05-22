import React from "react";
import { useParams } from "react-router-dom";
import UnitsArray from "../../../../Units/Unit";
import "./ResultContentSteps.css";

export default function ResultContentSteps({ unitId, stepId }) {
  const path = useParams();
  const prevStepId = stepId <= 5 ? stepId - 1 : stepId;
  const unit = UnitsArray();
  const answerObj = unit[unitId].task[prevStepId].step[0].answerboxes.map(
    (obj) => obj
  );
  const topic = unit[unitId].task[prevStepId].step[0].title;
  const hasImages = answerObj.some((obj) => obj.type === "image");

  return (
    <div className="StepAnswerContainer">
      <div>
        <h2>{topic}</h2>
      </div>
      <ul className={hasImages ? "AnswerList has-images" : "AnswerList"}>
        {answerObj.map((obj, index) => {
          const backgroundColor = obj.right ? "#65DCB4" : "#FF7449";
          const imgBorderColot = obj.right
            ? "6px solid #65DCB4"
            : "6px solid #FF7449";

          return (
            <li className="Answer" key={index}>
              {obj.type === "image" ? (
                <img
                  src={obj.answer}
                  alt={`Answer ${index}`}
                  className="AnswerImage"
                  style={{
                    border: imgBorderColot,
                  }}
                />
              ) : (
                <span
                  className="AnswerText"
                  style={{
                    backgroundColor: backgroundColor,
                    border: "6px solid #FF7449",
                  }}>
                  {obj.answer}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
