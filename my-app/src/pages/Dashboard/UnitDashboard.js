import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MostErrorsChart from "../../components/Charts/MostErrorsChart";
import AverageTimeChart from "../../components/Charts/AverageTimeChart";
import AnswerChart from "../../components/Charts/AnswerChart";
import "./UnitDashboard.css";
import AttemptsChart from "../../components/Charts/AttemptsChart";

export default function UnitDashBoard() {
  const { unitId } = useParams();
  const currentUnit = parseInt(unitId.replace("unit", ""), 10) || 1;

  return (
    <div className="UnitPage">
      <h1>Unit {currentUnit} Details</h1>
      <div className="charts">
        <div className="ChartContainer">
          <AnswerChart levelId={currentUnit} />
        </div>
        <div className="ChartContainer">
          <MostErrorsChart levelId={currentUnit} />
        </div>
        <div className="ChartContainer">
          {/* <AverageTimeChart levelId={currentUnit} />  */}
        </div>
        <div className="ChartContainer">
          <AttemptsChart levelId={currentUnit} />
        </div>
      </div>
    </div>
  );
}
