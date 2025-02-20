import React, { useEffect, useState } from "react";
import { fetchClassesFromLRS } from "../XapiComponent/XapiComponent";

const ClassFilter = ({ onSelectClass }) => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    const loadClasses = async () => {
      const classList = await fetchClassesFromLRS();
      setClasses(classList);
    };
    loadClasses();
  }, []);

  const handleSelect = (event) => {
    const selected = event.target.value;
    setSelectedClass(selected);
    onSelectClass(selected);
  };

  return (
    <div>
      <label>Klasse auswählen:</label>
      <select value={selectedClass} onChange={handleSelect}>
        <option value="">Alle Klassen</option>
        {classes.map((className) => (
          <option key={className} value={className}>
            {className}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClassFilter;
