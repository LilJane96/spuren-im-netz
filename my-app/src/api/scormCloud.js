// import React, { useState } from "react";
const ScormCloud = require("@rusticisoftware/scormcloud-api-v2-client-javascript");

let prompt;
var jsEnv = require("browser-or-node");
if (jsEnv.isBrowser) {
  prompt = window.prompt;
}
if (jsEnv.isNode) {
  prompt = require("prompt-sync")({ sigint: true });
}

// ScormCloud API credentials
// Note: These are not the same credentials used to log in to ScormCloud
const APP_ID = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
const SECRET_KEY = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

// Sample values for data

// String used for output formatting
const OUTPUT_BORDER =
  "---------------------------------------------------------\n";

/**
 * This sample will consist of:
 * 1. Creating a course.
 * 2. Registering a learner for the course.
 * 3. Building a link for the learner to take the course.
 * 4. Getting the learner's progress after having taken the course.
 * 5. Viewing all courses and registrations.
 * 6. Deleting all of the data created via this sample.
 *
 * All input variables used in this sample are defined up above.
 */
export const handleRegistration = async (
  COURSE_ID,
  LEARNER_ID,
  FIRSTNAME,
  LASTNAME,
  REGISTRATION_ID
) => {
  try {
    // Configure HTTP basic authorization
    const APP_NORMAL =
      ScormCloud.ApiClient.instance.authentications["APP_NORMAL"];
    APP_NORMAL.username = APP_ID;
    APP_NORMAL.password = SECRET_KEY;

    console.log("App ID:", APP_ID);
    console.log("Secret Key:", SECRET_KEY);

    // Registrierung erstellen
    await createRegistration(
      COURSE_ID,
      LEARNER_ID,
      FIRSTNAME,
      LASTNAME,
      REGISTRATION_ID
    );

    // Launch-Link generieren
    const launchLink = await new Promise((resolve, reject) => {
      buildLaunchLink(COURSE_ID, REGISTRATION_ID, (link, error) => {
        if (error) reject(error);
        else resolve(link);
      });
    });

    console.log(`Launch Link: ${launchLink}`);

    if (jsEnv.isBrowser) {
      // Öffnet ein Popup mit dem Launch-Link
      window.open(launchLink, "_blank");
    } else {
      console.log(
        "Navigiere zur URL oben, um den Kurs zu starten. Drücke Enter, wenn du fertig bist."
      );
      prompt();
    }

    // Fortschritt abrufen
    const registrationProgress = await new Promise((resolve, reject) => {
      getResultForRegistration(
        COURSE_ID,
        REGISTRATION_ID,
        (progress, error) => {
          if (error) reject(error);
          else resolve(progress);
        }
      );
    });

    console.log("Registration Progress: ", registrationProgress);

    if (registrationProgress?.xapiRegistrationId) {
      localStorage.setItem(
        "xapiRegistrationId",
        registrationProgress.xapiRegistrationId
      );
      console.log(
        "xapiRegistrationId gespeichert:",
        registrationProgress.xapiRegistrationId
      );
    } else {
      console.warn("xapiRegistrationId nicht verfügbar.");
    }

    return registrationProgress;
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    throw new Error(error?.message || "Unbekannter Fehler");
  }
};

function logErrorAndCleanUp(COURSE_ID, REGISTRATION_ID, error) {
  console.log("ERROR", error);

  if (jsEnv.isBrowser) {
    alert("Fehler: " + error);
  } else {
    console.error("Fehler:", error);
  }
}

/**
 * Creates a course by uploading the course from your local machine.
 * Courses are a package of content for a learner to consume.
 *
 * Other methods for importing a course exist. Check the documentation
 * for additional ways of importing a course.
 *
 * @param {String} courseId Id that will be used to identify the course.
 * @param {File} courseFile The File object containing the course contents.
 * @returns {CourseSchema} Detailed information about the newly uploaded course.
 */

/**
 * Creates a registration allowing the learner to consume the course
 * content. A registration is the link between a learner and a single
 * course.
 *
 * @param {String} courseId Id of the course to register the learner for.
 * @param {String} learnerId Id that will be used to identify the learner.
 * @param {string} registrationId Id that will be used to identify the registration.
 */
async function createRegistration(
  courseId,
  learnerId,
  fname,
  lname,
  registrationId
) {
  try {
    const registrationApi = new ScormCloud.RegistrationApi();
    const learner = { id: learnerId, firstName: fname, lastName: lname };
    const registration = {
      courseId: courseId,
      learner: learner,
      registrationId: registrationId,
    };

    await new Promise((resolve, reject) => {
      registrationApi.createRegistration(registration, {}, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });

    console.log("Registrierung erfolgreich erstellt.");
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    throw new Error(error?.response?.text || "Fehler bei der Registrierung");
  }
}

/**
 * Builds a url allowing the learner to access the course.
 *
 * This sample will build the launch link and print it out. It will then
 * pause and wait for user input, allowing you to navigate to the course
 * to generate sample learner progress. Once this step has been reached,
 * hitting the enter key will continue program execution.
 *
 * @param {String} registrationId Id of the registration the link is being built for.
 * @returns {String} Link for the learner to launch the course.
 */

function buildLaunchLink(courseId, registrationId, callback) {
  function buildLaunchLinkLogic() {
    const registrationApi = new ScormCloud.RegistrationApi();
    const settings = { redirectOnExitUrl: "Message" };
    registrationApi.buildRegistrationLaunchLink(
      registrationId,
      settings,
      function (error, data) {
        if (error) {
          return logErrorAndCleanUp(
            courseId,
            registrationId,
            error.response.text
          );
        }

        callback(data.launchLink);
      }
    );
  }

  // (Optional) Further authenticate via OAuth token access
  // First line is with OAuth, second is without
  // configureOAuth([ "read:registration" ], buildLaunchLinkLogic);
  buildLaunchLinkLogic();
}

/**
 * Gets information about the progress of the registration.
 *
 * For the most up-to-date results, you should implement our postback
 * mechanism. The basic premise is that any update to the registration
 * would cause us to send the updated results to your system.
 *
 * More details can be found in the documentation:
 * https://cloud.scorm.com/docs/v2/guides/postback/
 *
 * @param {String} registrationId Id of the registration to get results for.
 * @returns {RegistrationSchema} Detailed information about the registration's progress.
 */
function getResultForRegistration(courseId, registrationId, callback) {
  function getResultForRegistrationLogic() {
    const registrationApi = new ScormCloud.RegistrationApi();
    registrationApi.getRegistrationProgress(
      registrationId,
      {},
      function (error, data) {
        if (error) {
          return logErrorAndCleanUp(
            courseId,
            registrationId,
            error.response.text
          );
        }

        callback(data);
      }
    );
  }

  // (Optional) Further authenticate via OAuth token access
  // First line is with OAuth, second is without
  // configureOAuth([ "read:registration" ], getResultForRegistrationLogic);
  getResultForRegistrationLogic();
}

/**
 * Gets information about all courses. The result received from the API
 * call is a paginated list, meaning that additional calls are required
 * to retrieve all the information from the API. This has already been
 * accounted for in the sample.
 *
 * @returns {Array<CourseSchema>} List of detailed information about all of the courses.
 */
function getAllCourses(callback) {
  function getAllCoursesLogic() {
    const courseApi = new ScormCloud.CourseApi();
    const courseList = [];

    function getPaginatedCourses(more) {
      // This call is paginated, with a token provided if more results exist.
      // Additional filters can be provided to this call to get a subset
      // of all courses.
      courseApi.getCourses({ more: more }, function (error, data) {
        if (error) {
          return logErrorAndCleanUp(error.response.text);
        }

        courseList.push(...data.courses);

        if (data.more) {
          return getPaginatedCourses(data.more);
        }

        callback(courseList);
      });
    }
    getPaginatedCourses(null);
  }

  // (Optional) Further authenticate via OAuth token access
  // First line is with OAuth, second is without
  // configureOAuth([ "read:course" ], getAllCoursesLogic);
  getAllCoursesLogic();
}

/**
 * Gets information about the registration progress for all
 * registrations. The result received from the API call is a paginated
 * list, meaning that additional calls are required to retrieve all the
 * information from the API. This has already been accounted for in the
 * sample.
 *
 * This call can be quite time-consuming and tedious with lots of
 * registrations. If you find yourself making lots of calls to this
 * endpoint, it might be worthwhile to look into registration postbacks.
 *
 * More details can be found in the documentation:
 * https://cloud.scorm.com/docs/v2/guides/postback/
 *
 * @returns {Array<RegistrationSchema>} List of detailed information about all of the registrations.
 */
function getAllRegistrations(callback) {
  function getAllRegistrationsLogic() {
    const registrationApi = new ScormCloud.RegistrationApi();
    const registrationList = [];

    function getPaginatedRegistrations(more) {
      // This call is paginated, with a token provided if more results exist.
      // Additional filters can be provided to this call to get a subset
      // of all registrations.
      registrationApi.getRegistrations({ more: more }, function (error, data) {
        if (error) {
          return logErrorAndCleanUp(error.response.text);
        }

        registrationList.push(...data.registrations);

        if (data.more) {
          return getPaginatedRegistrations(data.more);
        }

        callback(registrationList);
      });
    }
    getPaginatedRegistrations(null);
  }

  // (Optional) Further authenticate via OAuth token access
  // First line is with OAuth, second is without
  // configureOAuth([ "read:registration" ], getAllRegistrationsLogic);
  getAllRegistrationsLogic();
}

/**
 * Deletes all of the data generated by this sample.
 * This code is run even if the program has errored out, providing a
 * "clean slate" for every run of this sample.
 *
 * It is not necessary to delete registrations if the course
 * they belong to has been deleted. Deleting the course will
 * automatically queue deletion of all registrations associated with
 * the course. There will be a delay between when the course is deleted
 * and when the registrations for the course have been removed. The
 * registration deletion has been handled here to prevent scenarios
 * where the registration hasn't been deleted yet by the time the
 * sample has been rerun.
 *
 * @param {String} courseId Id of the course to delete.
 * @param {String} registrationId Id of the registration to delete.
 */
function cleanUp(courseId, registrationId) {
  function cleanUpLogic() {
    // This call will use OAuth with the "delete:course" scope
    // if configured.  Otherwise the basic auth credentials will be used
    const courseApi = new ScormCloud.CourseApi();
    courseApi.deleteCourse(courseId, function (error) {
      if (error) {
        throw error;
      }
    });

    // The code below is to prevent race conditions if the
    // sample is run in quick successions.

    // This call will use OAuth with the "delete:registration" scope
    // if configured.  Otherwise the basic auth credentials will be used
    const registrationApi = new ScormCloud.RegistrationApi();
    registrationApi.deleteRegistration(registrationId, function (error) {
      if (error) {
        throw error;
      }
    });
  }

  // (Optional) Further authenticate via OAuth token access
  // First line is with OAuth, second is without
  // configureOAuth([ "delete:course", "delete:registration" ], cleanUpLogic);
  cleanUpLogic();
}
