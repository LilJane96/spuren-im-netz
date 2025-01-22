import ScormCloud from "@rusticisoftware/scormcloud-api-v2-client-javascript";

const configureScormCloud = () => {
  const defaultClient = ScormCloud.ApiClient.instance;

  const basicAuth = defaultClient.authentications["APP_NORMAL"];
  basicAuth.username = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
  basicAuth.password = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

  return defaultClient;
};
console.log("ScormCloud", ScormCloud);

export const sendXAPIStatementWithLRS = async (statement) => {
  const lrsEndpoint = process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT;
  const app_id = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
  const secret_key = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

  try {
    const response = await fetch(lrsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
        "X-Experience-API-Version": "1.0.3",
      },
      body: JSON.stringify(statement),
    });

    console.log("Response", response);
    if (!response.ok) {
      throw new Error(`Fehler beim Senden: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("xAPI-Statement erfolgreich gesendet:", responseData);
    return responseData;
  } catch (error) {
    console.error("Fehler beim Senden des xAPI-Statements:", error);
    throw error;
  }
};

// // SCORM Cloud API konfigurieren
// const configureScormCloud = () => {
//   const defaultClient = ScormCloud.ApiClient.instance;

//   const basicAuth = defaultClient.authentications["APP_NORMAL"];
//   basicAuth.username = process.env.REACT_APP_SCORM_CLOUD_APP_ID; // App ID
//   basicAuth.password = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY; // Secret Key

//   return new ScormCloud.PingApi();
// };

// const dispatchApi = new ScormCloud.DispatchApi();
// dispatchApi.updateDispatches(
//   new ScormCloud.UpdateDispatchSchema(),
//   { since: new Date().toISOString() },
//   function (err, data, response) {
//     console.log("dispatchApi", response.headers["x-total-count"]);
//   }
// );

// // Testaufruf an SCORM Cloud (Ping)
// export const testScormCloudConnection = async () => {
//   try {
//     // SCORM Cloud Ping ausführen
//     const response = await configureScormCloud();
//     console.log("Ping erfolgreich! Antwort:", response);
//     return response;
//   } catch (error) {
//     console.error("Ping fehlgeschlagen:", error);
//     throw error;
//   }
// };
