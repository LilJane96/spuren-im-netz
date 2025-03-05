import { sendXAPIStatementWithLRS } from "../components/XapiComponent/XapiComponent";

// Extrahiere Launch-Parameter aus der URL
const urlParams =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

const registration = urlParams.get("registration");

const actorParam = urlParams.get("actor");
const actor = actorParam && JSON.parse(actorParam);
// Sicherstellen, dass 'name' immer ein String ist
if (Array.isArray(actor?.name)) {
  actor.name = actor.name.join(" ");
}
let account = null;
if (actor?.account && Array.isArray(actor.account)) {
  account = actor.account[0];
} else if (actor?.account && typeof actor.account === "object") {
  account = actor.account;
}

console.log("actor", actor);
console.log("Account:", account);
console.log("registration:", registration);

export const sendLevelStartStatement = async (
  unitId,
  taskIndex,
  registrationId,
  className
) => {
  const statement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://activitystrea.ms/schema/1.0/start",
      display: { "en-US": "started" },
    },
    object: {
      id: `https://spuren-im-netz.web.app/activity/game`,
      definition: {
        name: { "en-US": `Started Unit ${unitId}` },
        description: { "en-US": `The learner has started Unit ${unitId}.` },
      },
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendLevelEndStatement = async (
  unitId,
  taskIndex,
  registrationId,
  sessionId,
  className
) => {
  const completedStatement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "completed",
      },
    },
    object: {
      id: "https://spuren-im-netz.web.app/activity/game",
      objectType: "Activity",
    },
    result: {
      success: true,
      completion: true,
      extensions: {
        "http://example.com/xapi/extensions/sessionId": sessionId,
      },
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };
  const passedStatement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/passed",
      display: { "en-US": "passed" },
    },
    object: {
      id: "https://spuren-im-netz.web.app/activity/game",
      objectType: "Activity",
    },
    result: {
      success: true,
      score: {
        scaled: 0.9,
      },
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };

  // Beide Statements senden
  await sendXAPIStatementWithLRS(completedStatement);
  await sendXAPIStatementWithLRS(passedStatement);
};

export const sendAnswerStatement = async (
  unitId,
  question,
  answer,
  isCorrect,
  taskIndex,
  registrationId,
  duration,
  className
) => {
  const statement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/answered",
      display: { "en-US": "answered" },
    },
    object: {
      id: `https://spuren-im-netz.web.app/activity/game`,
      definition: {
        name: { "en-US": question },
        description: {
          "en-US": `Task ${taskIndex + 1} in Unit ${unitId}`,
        },
      },
    },
    result: {
      response: answer,
      success: isCorrect,
      duration: duration,
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
    timestamp: new Date().toISOString(),
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendAttemptedStatements = async (
  unitId,
  question,
  attempts,
  taskIndex,
  registrationId,
  className
) => {
  const statement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/attempted",
      display: { "en-Us": "attempted" },
    },
    object: {
      id: `https://spuren-im-netz.web.app/activity/game`,
      definition: {
        name: { "en-US": question },
        description: {
          "en-US": `Task ${taskIndex + 1} in Unit ${unitId}`,
        },
      },
    },
    result: {
      response: `${attempts}`,
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendStepDurationStatement = async (
  unitId,
  taskIndex,
  duration,
  registrationId,
  className
) => {
  const statement = {
    actor: {
      objectType: "Agent",
      name: actor?.name || registrationId,
      account: {
        homePage: account?.accountServiceHomePage || "http://cloud.scorm.com",
        name: account?.accountName || registrationId,
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/experienced",
      display: { "en-US": "experienced" },
    },
    object: {
      id: `https://spuren-im-netz.web.app/activity/game`,
      definition: {
        name: { "en-US": `Step ${taskIndex + 1}` },
        description: {
          "en-US": `The learner experienced step ${taskIndex + 1}.`,
        },
      },
    },
    result: {
      duration: duration,
    },
    context: {
      registration: registration,
      contextActivities: {
        parent: [
          {
            id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
            definition: {
              name: { "en-US": `Step ${taskIndex + 1} of ${unitId}` },
              description: {
                "en-US": `The learner is on Step ${
                  taskIndex + 1
                } of ${unitId}.`,
              },
            },
          },
        ],
      },
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };

  await sendXAPIStatementWithLRS(statement);
};
