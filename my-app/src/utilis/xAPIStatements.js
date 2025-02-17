import { sendXAPIStatementWithLRS } from "../components/XapiComponent/XapiComponent";

export const sendLevelStartStatement = async (
  unitId,
  actor,
  xapiRegistrationId
) => {
  const statement = {
    actor: {
      mbox: `mailto:${actor}@example.com`,
      name: actor,
    },
    verb: {
      id: "http://activitystrea.ms/schema/1.0/start",
      display: { "en-US": "started" },
    },
    object: {
      id: `http://example.com/xapi/units/${unitId}`,
      definition: {
        name: { "en-US": `Started Unit ${unitId}` },
        description: { "en-US": `The learner has started Unit ${unitId}.` },
      },
    },
    context: {
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
          },
        ],
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendLevelEndStatement = async (
  unitId,
  username,
  xapiRegistrationId,
  sessionId
) => {
  const statement = {
    actor: {
      objectType: "Agent",
      name: `${username}`,
      mbox: `mailto:${username}@example.com`,
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "completed",
      },
    },
    object: {
      id: `https://spuren-im-netz.web.app/activity/game/${unitId}`,
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
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
          },
        ],
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendAnswerStatement = async (
  unitId,
  question,
  answer,
  isCorrect,
  taskIndex,
  username,
  xapiRegistrationId
) => {
  const statement = {
    actor: {
      name: `${username}`,
      mbox: `mailto:${username}@example.com`,
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/answered",
      display: { "en-US": "answered" },
    },
    object: {
      id: `http://spuren-im-netz/${unitId}/step${taskIndex + 1}`,
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
      extensions: {
        "http://spuren-im-netz/xapi/extensions/wrongAttempts": taskIndex,
      },
    },
    context: {
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
          },
        ],
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
  username,
  xapiRegistrationId
) => {
  const statement = {
    actor: {
      name: `${username}`,
      mbox: `mailto:${username}@example.com`,
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/attempted",
      display: { "en-Us": "attempted" },
    },
    object: {
      id: `http://spuren-im-netz/${unitId}/step${taskIndex + 1}`,
      definition: {
        name: { "en-US": question },
        description: {
          "en-US": `Task ${taskIndex + 1} in Unit ${unitId}`,
        },
      },
    },
    result: {
      success: false,
      completion: false,
      response: `${attempts}`,
      score: {
        scaled: 0.5,
        raw: 50,
        min: 0,
        max: 100,
      },
    },
    context: {
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
          },
        ],
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendStepDurationStatement = async (
  unitId,
  stepIndex,
  duration,
  username,
  xapiRegistrationId
) => {
  const statement = {
    actor: {
      name: `${username}`,
      mbox: `mailto:${username}@example.com`,
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/experienced",
      display: { "en-US": "experienced" },
    },
    object: {
      id: `http://example.com/xapi/units/${unitId}/steps${stepIndex}`,
      definition: {
        name: { "en-US": `Step ${stepIndex + 1}` },
        description: {
          "en-US": `The learner experienced step ${stepIndex + 1}.`,
        },
      },
    },
    result: {
      duration: duration,
    },
    context: {
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
          },
        ],
      },
    },
  };

  await sendXAPIStatementWithLRS(statement);
};
