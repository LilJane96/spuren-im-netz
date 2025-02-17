import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import AnswerChart from "../../components/Charts/AnswerChart";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <div className="UnitCardContainer">
        <div className="Unitcard">
          <Link to={"/dashboard/unit1"}>
            <h2>Unit1 - Profil erstellen</h2>
            <AnswerChart levelId={1} />
          </Link>
        </div>
        <div className="Unitcard">
          <Link to={"/dashboard/unit2"}>
            <h2>Unit2 - Anfrage eines Fremden</h2>
            <AnswerChart levelId={2} />
          </Link>
        </div>
        <div className="Unitcard">
          <Link to={"/dashboard/unit3"}>
            <h2>Unit3 - Cybermobbing</h2>
            <AnswerChart levelId={3} />
          </Link>
        </div>
        <div className="Unitcard">
          <Link to={"/dashboard/unit4"}>
            <h2>Unit4 - Fake Werbung</h2>
            <AnswerChart levelId={4} />
          </Link>
        </div>
      </div>
    </div>
  );
}
