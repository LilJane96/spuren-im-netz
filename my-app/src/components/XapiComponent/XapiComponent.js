import React from "react";
import { useTinCan } from "react-tincan";

const XapiComponent = () => {
  const sendStatement = () => {
    // TinCan LRS Konfiguration
    const { tincan } = new useTinCan({
      recordStore: [
        {
          endpoint: process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT,
          username: process.env.REACT_APP_SCORM_CLOUD_APP_ID,
          password: process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY,
        },
      ],
    });

    // xAPI Statement erstellen
    const statement = {
      actor: {
        mbox: "mailto:learner@example.com",
        name: "John Doe",
      },
      verb: {
        id: "http://adlnet.gov/expapi/verbs/completed",
        display: { "en-US": "completed" },
      },
      object: {
        id: "http://example.com/xapi/course",
        definition: {
          name: { "en-US": "ReactJS Course" },
          description: { "en-US": "A simple xAPI course in ReactJS." },
        },
      },
    };

    // Statement senden
    tincan.sendStatement(statement, {
      callback: (err, xhr) => {
        if (err) {
          console.error("Statement konnte nicht gesendet werden:", err);
        } else {
          console.log("Statement erfolgreich gesendet:", xhr);
        }
      },
    });
  };

  return (
    <div>
      <h1>ReactJS xAPI Integration</h1>
      <button onClick={sendStatement}>Send xAPI Statement</button>
    </div>
  );
};

export default XapiComponent;
