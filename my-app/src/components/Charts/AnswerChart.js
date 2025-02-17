import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchAnswerDataFromLRS } from "../XapiComponent/XapiComponent";
import "./Charts.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartsLoader from "../Loader/ChartsLoader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnswerChart = ({ levelId }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchAnswerDataFromLRS(levelId);
      setData(result);
    };
    loadData();
  }, [levelId]);

  const steps = Object.keys(data[levelId] || {}).map((step) => step);

  // Daten für das Diagramm vorbereiten
  const chartData = {
    labels: steps.map((item) => `Step ${item}`),
    datasets: [
      {
        label: "Richtig",
        data: steps.map((step) => data[levelId]?.[step]?.correct || 0),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Falsch",
        data: steps.map((step) => data[levelId]?.[step]?.incorrect || 0),
        backgroundColor: "#FF6384",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Richtige/Falsche Antworten für Level ${levelId}`,
      },
    },
  };

  return (
    <div className="AnswerChart">
      <h3>Richtig/Falsch Antworten für Level {levelId}</h3>
      {chartData ? (
        <Bar data={chartData} options={options} style={{ width: "80%" }} />
      ) : (
        <ChartsLoader />
      )}
    </div>
  );
};

export default AnswerChart;
