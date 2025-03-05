import axios from "axios";

const app_id = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
const secret_key = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

const urlParams =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

const lrsEndpoint =
  urlParams.get("endpoint") ||
  process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT + "/";
const authToken =
  urlParams.get("auth") || `Basic ${btoa(`${app_id}:${secret_key}`)}`;

console.log("lrsEndpoint", lrsEndpoint);
console.log("authToken", authToken);

const authHeader = {
  Authorization: authToken,
  "Content-Type": "application/json",
  "X-Experience-API-Version": "1.0.3",
};

// Senden des xAPI-Statements an SCORM Cloud
export const sendXAPIStatementWithLRS = async (statement) => {
  try {
    const response = await fetch(`${lrsEndpoint}statements`, {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify(statement),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Fehler beim Senden des Statements:", errorData);
      throw new Error(`HTTP Fehler ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Fehler beim Senden des Statements:", error);
    throw error;
  }
};

export const fetchClassesFromLRS = async () => {
  try {
    const response = await axios.get(`${lrsEndpoint}statements`, {
      headers: authHeader,
      params: {
        verb: "http://adlnet.gov/expapi/verbs/answered",
      },
    });

    const statements = response.data.statements;
    const classNames = new Set();

    statements.forEach((statement) => {
      if (
        statement.context &&
        statement.context.extensions &&
        statement.context.extensions[
          "http://example.com/xapi/extensions/className"
        ]
      ) {
        const classId =
          statement.context.extensions[
            "http://example.com/xapi/extensions/className"
          ];
        classNames.add(classId);
      }
    });

    return Array.from(classNames);
  } catch (error) {
    console.error("Fehler beim Abrufen der Klassenliste:", error);
    return [];
  }
};

export const fetchStudentsFromLRS = async (selectedClass = "") => {
  try {
    const response = await axios.get(`${lrsEndpoint}statements`, {
      headers: authHeader,
      params: {
        verb: "http://adlnet.gov/expapi/verbs/answered",
      },
    });

    const statements = response.data.statements;
    const studentNames = new Set();

    statements.forEach((statement) => {
      const classId =
        statement.context?.extensions?.[
          "http://example.com/xapi/extensions/className"
        ];
      if (statement.actor?.name) {
        if (!selectedClass || classId === selectedClass) {
          studentNames.add(statement.actor.name);
        }
      }
    });
    return Array.from(studentNames);
  } catch (error) {
    console.error("Fehler beim Abrufen der Schülerliste:", error);
    return [];
  }
};

// Funktion, um Statements aus dem LRS zu holen und nach Erfolg zu aggregieren
export const fetchAnswerDataFromLRS = async (
  studentName = "",
  selectedClass = ""
) => {
  try {
    let resultByUnit = {};

    const params = {
      verb: "http://adlnet.gov/expapi/verbs/answered",
      limit: 100,
    };

    if (studentName) {
      console.log("StudentName", studentName);
      params.agent = JSON.stringify({
        account: {
          homePage: "http://cloud.scorm.com",
          name: studentName.replace("User", ""),
        },
      });
    }
    console.log("params", params);
    const response = await axios.get(`${lrsEndpoint}statements`, {
      params,
      headers: authHeader,
    });

    const statements = response.data.statements;

    statements.forEach((statement) => {
      const parentActivities =
        statement.context?.contextActivities?.parent || [];

      parentActivities.forEach((parent) => {
        const match = parent.id.match(/unit(\d+)\/step(\d+)/);

        if (match) {
          const [_, unitId, step] = match.map(Number);

          if (!resultByUnit[unitId]) {
            resultByUnit[unitId] = {};
          }
          if (!resultByUnit[unitId][step]) {
            resultByUnit[unitId][step] = {
              correct: 0,
              incorrect: 0,
              durations: [],
            };
          }

          const isCorrect = statement.result?.success ?? false;
          const classId =
            statement.context?.extensions?.[
              "http://example.com/xapi/extensions/className"
            ] || "";

          if (selectedClass && classId !== selectedClass) {
            return; // Überspringt dieses Statement, wenn es nicht zur Klasse gehört
          }

          if (isCorrect) {
            resultByUnit[unitId][step].correct += 1;
          } else {
            resultByUnit[unitId][step].incorrect += 1;
          }

          // Dauer extrahieren und umwandeln
          if (statement.result?.duration) {
            const durationSeconds = parseDuration(statement.result.duration);
            resultByUnit[unitId][step].durations.push(durationSeconds);
          }
        }
      });
    });

    console.log("resultByUnit", resultByUnit);
    return resultByUnit;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return {};
  }
};

// Fetch die Fehler pro Aufgabe mit dem Step mit den meisten Fehlern in der Mitte
export const fetchMostErrorsByLevel = async (levelId, numberOfSteps = 5) => {
  try {
    const errorsByStep = [];

    for (let step = 1; step <= numberOfSteps; step++) {
      const response = await axios.get(`${lrsEndpoint}statements`, {
        headers: authHeader,
        params: {
          verb: "http://adlnet.gov/expapi/verbs/answered",
        },
      });

      const statements = response.data.statements;
      let errorCount = 0;

      // Zähle die Fehler für diesen Step
      statements.forEach((statement) => {
        const parentId =
          statement.context?.contextActivities?.parent?.[0]?.id || "";
        const stepMatch = parentId.match(/unit(\d+)\/step(\d+)/);
        const statementUnitId = stepMatch ? stepMatch[1] : null;
        const statementStep = stepMatch ? parseInt(stepMatch[2], 10) : null;

        if (
          statement.result &&
          statement.result.success === false &&
          statementUnitId === String(levelId) &&
          statementStep === step
        ) {
          errorCount++;
        }
      });

      errorsByStep.push({ step, errors: errorCount });
    }

    // Findet die maximale Anzahl an Fehlern
    const maxErrors = Math.max(...errorsByStep.map((item) => item.errors));

    // Findet alle Steps mit der maximalen Anzahl an Fehlern
    const maxErrorSteps = errorsByStep.filter(
      (item) => item.errors === maxErrors
    );

    // Verschiebt diese Steps in die Mitte (falls mehrere, mittig platzieren)
    const centerIndex = Math.floor(errorsByStep.length / 2);
    const remainingSteps = errorsByStep.filter(
      (item) => item.errors !== maxErrors
    );

    // Schritte mit den meisten Fehlern gleichmäßig um die Mitte verteilen
    const centeredErrors = [
      ...remainingSteps.slice(0, centerIndex),
      ...maxErrorSteps,
      ...remainingSteps.slice(centerIndex),
    ];

    return centeredErrors;
  } catch (error) {
    console.error("Fehler beim Abrufen der Fehlerdaten:", error);
    return [];
  }
};

// Fetch durchschnittliche Bearbeitungszeit pro Schritt

export const fetchAverageTimeByLevel = async (levelId, numberOfSteps = 5) => {
  try {
    let count = 0;
    let totalDuration = 0;

    for (let step = 1; step <= numberOfSteps; step++) {
      const response = await axios.get(`${lrsEndpoint}statements`, {
        headers: authHeader,
        params: {
          verb: "http://adlnet.gov/expapi/verbs/answered",
        },
      });

      const statements = response.data.statements;

      statements.forEach((statement) => {
        const parentId =
          statement.context?.contextActivities?.parent?.[0]?.id || "";
        const stepMatch = parentId.match(/unit(\d+)\/step(\d+)/);
        const statementUnitId = stepMatch ? stepMatch[1] : null;
        const statementStep = stepMatch ? parseInt(stepMatch[2], 10) : null;

        if (
          statement.result &&
          statement.result.duration &&
          statementUnitId === String(levelId) &&
          statementStep === step
        ) {
          const duration = statement.result.duration;
          const seconds = parseDuration(duration);
          totalDuration += seconds;
          count += 1;
        }
      });
    }
    return count > 0 ? (totalDuration / count).toFixed(2) : 0;
  } catch (error) {
    console.error("Fehler beim Abrufen der Bearbeitungszeit:", error);
    return 0;
  }
};

const calculateMedian = (arr) => {
  if (!arr.length) return 0;
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

export const fetchAttemptsByStep = async (levelId, numberOfSteps = 5) => {
  try {
    const attemptsData = {};

    for (let step = 1; step <= numberOfSteps; step++) {
      const response = await axios.get(`${lrsEndpoint}statements`, {
        headers: authHeader,
        params: {
          verb: "http://adlnet.gov/expapi/verbs/attempted",
        },
      });
      const statements = response.data.statements;

      // Extrahiert die Anzahl der Versuche aus den Statements
      const attempts = statements
        .map((statement) => {
          const parentId =
            statement.context?.contextActivities?.parent?.[0]?.id || "";
          const stepMatch = parentId.match(/unit(\d+)\/step(\d+)/);
          const statementUnitId = stepMatch ? stepMatch[1] : null;
          const statementStep = stepMatch ? parseInt(stepMatch[2], 10) : null;

          if (statementUnitId === String(levelId) && statementStep === step) {
            return statement.result && statement.result.response
              ? parseInt(statement.result.response, 10)
              : 0;
          }
          return 0;
        })
        .filter((attempt) => !isNaN(attempt));

      if (attempts.length > 0) {
        // Berechne Min, Median und Max
        const min = Math.min(...attempts);
        const median = calculateMedian(attempts);
        const max = Math.max(...attempts);

        // Speichere die Ergebnisse für diesen Schritt
        attemptsData[step] = {
          min,
          median,
          max,
        };
      } else {
        // Falls keine gültigen Versuche vorhanden sind, setze Standardwerte
        attemptsData[step] = {
          min: 0,
          median: 0,
          max: 0,
        };
      }
    }

    return attemptsData;
  } catch (error) {
    console.error("Fehler beim Abrufen der Versuchsanzahl:", error);
    return {};
  }
};

// Hilfsfunktion zur Umrechnung von ISO-8601-Dauer in Sekunden
const parseDuration = (isoDuration) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = isoDuration.match(regex);
  const hours = matches[1] ? parseInt(matches[1], 10) : 0;
  const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
  const seconds = matches[3] ? parseInt(matches[3], 10) : 0;
  return hours * 3600 + minutes * 60 + seconds;
};
