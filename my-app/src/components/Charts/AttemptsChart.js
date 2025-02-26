import React, { useEffect, useRef, useState } from "react";
import { Chart, LinearScale, CategoryScale } from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
} from "@sgratzl/chartjs-chart-boxplot";
import { fetchAttemptsByStep } from "../XapiComponent/XapiComponent";
import "./Charts.css";
import ChartsLoader from "../Loader/ChartsLoader";

// Register controller in Chart.js
Chart.register(BoxPlotController, BoxAndWiskers, LinearScale, CategoryScale);

const AttemptsChart = ({ levelId }) => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null); // Ref to hold the canvas element
  const chartInstanceRef = useRef(null); // Ref to hold the Chart.js instance

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAttemptsByStep(levelId);
      setChartData(response);
    };

    fetchData();
  }, [levelId]);

  useEffect(() => {
    if (chartData && chartRef.current) {
      // Destroy existing chart instance if it exists (to avoid duplicates)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Transform chartData into the correct format for boxplots
      const labels = Object.keys(chartData); // Step labels (e.g., 1, 2, 3...)
      const data = Object.values(chartData).map((item) => [
        item.min,
        item.median, // Chart.js Boxplot doesn't require quartiles; we only use min, median, and max for simplicity
        item.max,
      ]);

      // Create new chart instance
      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new Chart(ctx, {
        type: "boxplot",
        data: {
          labels: labels.map((item) => `Step ${item}`),
          datasets: [
            {
              label: "Versuche",
              backgroundColor: "rgba(255,0,0,0.5)",
              borderColor: "red",
              borderWidth: 1,
              outlierColor: "#999999",
              padding: 10,
              itemRadius: 0,
              data,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Boxplot der Versuche für Level ${levelId}`,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData, levelId]);

  return (
    <div className="AttemptsChart">
      <h3>Anzahl der häufigsten Versuche Level {levelId}</h3>
      {chartData ? <canvas ref={chartRef} /> : <ChartsLoader />}
    </div>
  );
};

export default AttemptsChart;
