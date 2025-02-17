import React, { useEffect, useState } from "react";
import { fetchAverageTimeByLevel } from "../XapiComponent/XapiComponent";

const AverageTimeChart = ({ levelId }) => {
  const [averageTime, setAverageTime] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchAverageTimeByLevel(levelId);
      setAverageTime(result);
    };
    loadData();
  }, [levelId]);

  return (
    <div>
      <h3>Durchschnittliche Bearbeitungszeit ({levelId})</h3>
      <p>{averageTime} Sekunden</p>
    </div>
  );
};

export default AverageTimeChart;
