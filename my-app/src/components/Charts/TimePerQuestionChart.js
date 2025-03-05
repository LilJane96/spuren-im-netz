import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchAnswerDataFromLRS } from "../XapiComponent/XapiComponent";
import "./Charts.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartsLoader from "../Loader/ChartsLoader";
import StudentFilter from "../StudentFilter/StudentFilter";
import ClassFilter from "../ClassFilter/ClassFilter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const TimePerQuestionChart = ({ levelId }) => {
  const [data, setData] = useState({});
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchAnswerDataFromLRS(
        selectedStudent,
        selectedClass
      );
      setData(result);
      setLoading(false);
    };
    loadData();
  }, [levelId, selectedStudent, selectedClass]);

  const steps = Object.keys(data[levelId] || {}).map((step) => step);

  const processedData = Object.keys(data[levelId] || {}).reduce((acc, step) => {
    const durations = data[levelId][step].durations || [];
    const totalDuration = durations.reduce((sum, val) => sum + val, 0); // Summieren statt Durchschnitt

    acc[step] = { ...data[levelId][step], totalDuration };
    return acc;
  }, {});

  console.log("Processed Data:", processedData);

  console.log("Chart Data Source:", data[levelId]);

  console.log("Processed Data:", processedData);

  const chartData = {
    labels: Object.keys(processedData),
    datasets: [
      {
        label: "Bearbeitungszeit (s)",
        data: Object.values(processedData).map((step) => step.totalDuration),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Bearbeitungszeit pro Frage für Level ${levelId}`,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Zeit (Sekunden)",
        },
        beginAtZero: false, // Damit nicht automatisch bei 0 gestartet wird
      },
    },
  };

  console.log(
    "Dauer-Werte für Chart:",
    Object.values(data[levelId] || {}).map((step) => step.averageDuration)
  );

  console.log("Labels:", Object.keys(data[levelId] || {}));
  return (
    <div className="TimePerQuestionChart">
      <h3>Bearbeitungszeit pro Frage - Level {levelId}</h3>
      <div>
        <StudentFilter
          onSelectStudent={setSelectedStudent}
          selectedClass={selectedClass}
        />
        <ClassFilter onSelectClass={setSelectedClass} />
      </div>
      {loading ? (
        <ChartsLoader />
      ) : (
        <Line data={chartData} options={options} style={{ width: "80%" }} />
      )}
    </div>
  );
};

export default TimePerQuestionChart;
