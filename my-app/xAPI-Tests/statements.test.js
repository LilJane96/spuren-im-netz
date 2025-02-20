import { v4 as uuidv4 } from "uuid";
import {
  sendAnswerStatement,
  sendAttemptedStatements,
  sendLevelEndStatement,
  sendLevelStartStatement,
  sendStepDurationStatement,
} from "../src/utilis/xAPIStatements";
import { sendXAPIStatementWithLRS } from "../src/components/XapiComponent/XapiComponent";

const url = process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT + "/statements";
const app_id = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
const secret_key = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;
const registrationId = uuidv4();
const sessionId = uuidv4();

const mockActor = "testUser";
const mockUnitId = "unit1";
const mockXapiRegistrationId = registrationId;
const mockSessionId = sessionId;
const mockClassName = "3c";
const mockQuestion = "Profilname";
const mockAnswer = "Puzzlestar";
const mockStepIndex = 1;
const mockDuration = "PT30S";
const mockAttempts = 2;

describe("xAPI Statement Tests", () => {
  beforeEach(() => {
    //Erstellung einer gemockten Version von fetch
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Mock nach jedem Test zurücksetzen
  });

  test("sendXAPIStatement sollte ein Statement korrekt senden", async () => {
    const mockStatement = {
      actor: { mbox: "mailto:test@example.com" },
      verb: { id: "http://adlnet.gov/expapi/verbs/attempted" },
      object: { id: "http://example.com/activity" },
    };

    await sendXAPIStatementWithLRS(mockStatement);

    // Prüft, ob fetch genau einmal aufgerufen wurde
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
          "Content-Type": "application/json",
          "X-Experience-API-Version": "1.0.3",
        }),
        body: JSON.stringify(mockStatement),
      })
    );
  });

  test("sendXAPIStatement sollte einen Fehler werfen, wenn Response nicht ok ist", async () => {
    const mockStatement = {
      actor: { mbox: "mailto:test@example.com" },
      verb: { id: "http://adlnet.gov/expapi/verbs/answered" },
      object: { id: "http://spuren-im-netz/unit1/step1" },
    };

    // Simuliert eine fehlgeschlagene Fetch-Response mit Status 500
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ error: "Serverfehler" }),
    });

    await expect(sendXAPIStatementWithLRS(mockStatement)).rejects.toThrow(
      "HTTP Fehler 500"
    );

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("sendLevelStartStatement sollte korrektes Statement senden", async () => {
    await sendLevelStartStatement(
      mockUnitId,
      mockActor,
      mockXapiRegistrationId,
      mockClassName
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining(
          `"id":"http://activitystrea.ms/schema/1.0/start"`
        ),
      })
    );
  });

  test("sendLevelEndStatement sollte korrektes Statement senden", async () => {
    await sendLevelEndStatement(
      mockUnitId,
      mockActor,
      mockXapiRegistrationId,
      mockSessionId,
      mockClassName
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining(
          `"id":"http://adlnet.gov/expapi/verbs/completed"`
        ),
      })
    );
  });

  test("sendAnswerStatement sollte korrektes Statement senden", async () => {
    await sendAnswerStatement(
      mockUnitId,
      mockQuestion,
      mockAnswer,
      true,
      mockStepIndex,
      mockActor,
      mockXapiRegistrationId,
      mockClassName
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining(
          `"id":"http://adlnet.gov/expapi/verbs/answered"`
        ),
      })
    );
  });

  test("sendAttemptedStatements sollte korrektes Statement senden", async () => {
    await sendAttemptedStatements(
      mockUnitId,
      mockQuestion,
      mockAttempts,
      mockStepIndex,
      mockActor,
      mockXapiRegistrationId,
      mockClassName
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining(
          `"id":"http://adlnet.gov/expapi/verbs/attempted"`
        ),
      })
    );
  });

  test("sendStepDurationStatement sollte korrektes Statement senden", async () => {
    await sendStepDurationStatement(
      mockUnitId,
      mockStepIndex,
      mockDuration,
      mockActor,
      mockXapiRegistrationId,
      mockClassName
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining(
          `"id":"http://adlnet.gov/expapi/verbs/experienced"`
        ),
      })
    );
  });
});
