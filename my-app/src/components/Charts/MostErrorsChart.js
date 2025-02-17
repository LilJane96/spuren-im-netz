import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchMostErrorsByLevel } from "../XapiComponent/XapiComponent";
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

const MostErrorsChart = ({ levelId, numberOfSteps = 5 }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const stepsWithErrors = await fetchMostErrorsByLevel(
        levelId,
        numberOfSteps
      );

      if (!stepsWithErrors) return;

      // Maximaler Fehlerwert
      const maxErrors = Math.max(...stepsWithErrors.map((item) => item.errors));

      // Farben dynamisch basierend auf Fehleranzahl
      const backgroundColors = stepsWithErrors.map((item) =>
        item.errors === maxErrors ? "#FF6384" : "#36A2EB"
      );

      // Daten für die Chart.js vorbereiten
      const data = {
        labels: stepsWithErrors.map((item) => `Step ${item.step}`),
        datasets: [
          {
            label: "Fehleranzahl",
            data: stepsWithErrors.map((item) => item.errors),
            backgroundColor: backgroundColors,
          },
        ],
      };

      setChartData(data);
    };

    loadData();
  }, [levelId, numberOfSteps]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Fehlerstatistik für Level ${levelId}`,
      },
    },
  };

  return (
    <div className="MostErrorsChart">
      <h3>Fehlerstatistik für Level {levelId}</h3>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        // <p>Daten werden geladen...</p>
        <ChartsLoader />
      )}
    </div>
  );
};

export default MostErrorsChart;
