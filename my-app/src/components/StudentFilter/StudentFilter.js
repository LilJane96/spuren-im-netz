import React, { useEffect, useState } from "react";
import { fetchStudentsFromLRS } from "../XapiComponent/XapiComponent";

const StudentFilter = ({ onSelectStudent, selectedClass }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");

  useEffect(() => {
    const loadStudents = async () => {
      console.log("selectedClass", selectedClass);
      const studentList = await fetchStudentsFromLRS(selectedClass);
      setStudents(studentList);
    };
    loadStudents();
  }, [selectedClass]);

  const handleSelect = (event) => {
    const student = event.target.value;
    setSelectedStudent(student);
    onSelectStudent(student);
  };

  return (
    <div>
      <label>Schüler auswählen:</label>
      <select value={selectedStudent} onChange={handleSelect}>
        <option value="">Alle Schüler</option>
        {students.map((student) => (
          <option key={student} value={student}>
            {student}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StudentFilter;
