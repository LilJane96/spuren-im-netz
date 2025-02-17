import axios from "axios";

const lrsEndpoint =
  process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT + "/statements";
const lrsStatementEndpoint =
  process.env.REACT_APP_SCORM_CLOUD_LRS_STATEMENTS_ENDPOINT;
const app_id = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
const secret_key = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

const authHeader = {
  Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
  "Content-Type": "application/json",
  "X-Experience-API-Version": "1.0.3",
};

export const sendXAPIStatementWithLRS = async (statement) => {
  try {
    const response = await fetch(lrsEndpoint, {
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
  }
};

// Funktion, um Statements aus dem LRS zu holen und nach Erfolg zu aggregieren
export const fetchAnswerDataFromLRS = async (levelId, numberOfSteps = 5) => {
  try {
    let resultByUnit = {};

    // Iteriere durch alle Steps für das gegebene Level
    for (let step = 1; step <= numberOfSteps; step++) {
      const activityId = `http://spuren-im-netz/unit${levelId}/step${step}`;

      // Abrufen der Daten für das aktuelle Level und Step
      const response = await axios.get(lrsStatementEndpoint, {
        headers: authHeader,
        params: {
          verb: "http://adlnet.gov/expapi/verbs/answered",
          activity: activityId,
        },
      });
      const statements = response.data.statements;

      // Initialisiere Unit und Step wenn nicht vorhanden
      if (!resultByUnit[levelId]) {
        resultByUnit[levelId] = {};
      }

      if (!resultByUnit[levelId][step]) {
        resultByUnit[levelId][step] = { correct: 0, incorrect: 0 };
      }

      // Zähle richtige und falsche Antworten
      statements.forEach((statement) => {
        const isCorrect =
          statement.result && statement.result.success !== undefined
            ? statement.result.success
            : false;
        if (isCorrect) {
          resultByUnit[levelId][step].correct += 1;
        } else {
          resultByUnit[levelId][step].incorrect += 1;
        }
      });
    }

    return resultByUnit; // Gibt die Ergebnisse für alle Steps und Levels zurück
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
      const activityId = `http://spuren-im-netz/unit${levelId}/step${step}`;
      const response = await axios.get(
        "https://cloud.scorm.com/lrs/ZD5YD4VXWA/statements",
        {
          headers: authHeader,
          params: {
            verb: "http://adlnet.gov/expapi/verbs/answered",
            activity: activityId,
          },
        }
      );

      const statements = response.data.statements;
      let errorCount = 0;

      // Zähle die Fehler für diesen Step
      statements.forEach((statement) => {
        if (statement.result && statement.result.success === false) {
          errorCount++;
        }
      });

      errorsByStep.push({ step, errors: errorCount });
    }

    // Finde die maximale Anzahl an Fehlern
    const maxErrors = Math.max(...errorsByStep.map((item) => item.errors));

    // Finde alle Steps mit der maximalen Anzahl an Fehlern
    const maxErrorSteps = errorsByStep.filter(
      (item) => item.errors === maxErrors
    );

    // Verschiebe diese Steps in die Mitte (falls mehrere, mittig platzieren)
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
      const activityId = `http://spuren-im-netz/unit${levelId}/step${step}`;
      const response = await axios.get(
        "https://cloud.scorm.com/lrs/ZD5YD4VXWA/statements",
        {
          headers: authHeader,
          params: {
            verb: "http://adlnet.gov/expapi/verbs/answered",
            activity: activityId,
          },
        }
      );

      const statements = response.data.statements;

      statements.forEach((statement) => {
        if (statement.result && statement.result.duration) {
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
      const activityId = `http://spuren-im-netz/unit${levelId}/step${step}`;
      const response = await axios.get(
        "https://cloud.scorm.com/lrs/ZD5YD4VXWA/statements",
        {
          headers: authHeader,
          params: {
            verb: "http://adlnet.gov/expapi/verbs/attempted",
            activity: activityId,
          },
        }
      );
      console.log(`Response for step ${step}:`, response.data);

      console.log("Generated activityId:", activityId);

      console.log("Request params for step", step, {
        verb: "http://adlnet.gov/expapi/verbs/attempted",
        activity: activityId,
      });
      const statements = response.data.statements;
      console.log(`Statements for step ${step}:`, statements);

      // Extrahiere die Anzahl der Versuche aus den Statements
      const attempts = statements
        .map((statement) =>
          statement.result && statement.result.response
            ? parseInt(statement.result.response, 10)
            : 0
        )
        .filter((attempt) => !isNaN(attempt)); // Filtere ungültige Werte heraus
      console.log(`Attempts for step ${step}:`, attempts);

      console.log("attempts.length", attempts.length);
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

    console.log("attemptsData", attemptsData);
    return attemptsData;
  } catch (error) {
    console.error("Fehler beim Abrufen der Versuchsanzahl:", error);
    return {};
  }
};

// Hilfsfunktion zur Umrechnung von ISO-8601-Dauer
const parseDuration = (isoDuration) => {
  const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const matches = isoDuration.match(regex);
  const hours = matches[1] ? parseInt(matches[1]) : 0;
  const minutes = matches[2] ? parseInt(matches[2]) : 0;
  const seconds = matches[3] ? parseInt(matches[3]) : 0;
  return hours * 3600 + minutes * 60 + seconds;
};

// import React from "react";
// import TinCan from "tincanjs";

// export const XapiTinCanStatement = async (statement) => {
//   // TinCan LRS Konfiguration
//   let lrs;
//   try {
//     lrs = new TinCan.LRS({
//       endpoint: process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT,
//       username: process.env.REACT_APP_SCORM_CLOUD_APP_ID,
//       password: process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY,
//       allowFail: false,
//     });
//   } catch (error) {
//     console.error("Failed to setup LRS object: ", error);
//     return; // Funktion hier abbrechen, falls Initialisierung fehlschlägt
//   }

//   // Validierung des Statements
//   if (!statement || typeof statement !== "object") {
//     console.error("Invalid statement provided:", statement);
//     return;
//   }

//   // Speichere das Statement im LRS
//   lrs.saveStatement(statement, {
//     callback: function (err, xhr) {
//       if (err) {
//         if (xhr) {
//           console.error(
//             "Failed to save statement: " +
//               xhr.responseText +
//               " (" +
//               xhr.status +
//               ")"
//           );
//         } else {
//           console.error("Failed to save statement: ", err);
//         }
//         return;
//       }

//       console.log("Statement successfully saved:", statement);
//     },
//   });
// };
