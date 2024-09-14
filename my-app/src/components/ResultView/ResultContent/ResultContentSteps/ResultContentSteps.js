import React from "react";
import { useParams } from "react-router-dom";
import "./ResultContentSteps.css";
import UnitOne from "../../../../Units/UnitOne";
import UnitTwo from "../../../../Units/UnitTwo";
import UnitThree from "../../../../Units/UnitThree";
import UnitFour from "../../../../Units/UnitFour";

export default function ResultContentSteps({ unitId, stepId }) {
  const unitsArray = [UnitOne(), UnitTwo(), UnitThree(), UnitFour()];

  const path = useParams();
  const prevStepId = stepId <= 5 ? stepId - 1 : stepId;
  const unit = unitsArray;
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
          const backgroundColor = obj.right
            ? "#65DCB4"
            : "var(--answerbox-wrong)";
          const imgBorderColor = obj.right
            ? "6px solid #06865B"
            : "6px solid var(--answerbox-wrong)";
          console.log("obj", obj.right);
          return (
            <li className="Answer" key={index}>
              {obj.type === "image" ? (
                <img
                  src={obj.answer}
                  alt={`Answer ${index}`}
                  className={`AnswerImage`}
                  style={{
                    border: imgBorderColor,
                  }}
                />
              ) : (
                <span
                  className={`AnswerText  ${obj.right}`}
                  style={{
                    backgroundColor: backgroundColor,
                    border: imgBorderColor,
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
