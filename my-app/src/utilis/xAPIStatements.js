import { sendXAPIStatementWithLRS } from "../components/XapiComponent/XapiComponent";

export const sendLevelStartStatement = async (
  unitId,
  actor,
  xapiRegistrationId,
  className
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
      id: `https://spuren-im-netz.web.app/${unitId}`,
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
      extensions: {
        "http://example.com/xapi/extensions/className": className,
      },
    },
  };
  await sendXAPIStatementWithLRS(statement);
};

export const sendLevelEndStatement = async (
  unitId,
  username,
  xapiRegistrationId,
  sessionId,
  className
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
      extensions: {
        "http://example.com/xapi/extensions/className": className,
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
  xapiRegistrationId,
  duration,
  className
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
      id: `http://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
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
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
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
  username,
  xapiRegistrationId,
  className
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
      id: `https://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
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
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
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
  username,
  xapiRegistrationId,
  className
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
      id: `https://spuren-im-netz.web.app/${unitId}/step${taskIndex + 1}`,
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
      registration: xapiRegistrationId,
      contextActivities: {
        parent: [
          {
            id: "https://spuren-im-netz.web.app/activity/game",
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
