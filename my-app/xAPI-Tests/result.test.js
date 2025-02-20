import { sendAnswerStatement } from "../src/utilis/xAPIStatements";
import { v4 as uuidv4 } from "uuid";

const url = process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT + "/statements";
const registrationId = uuidv4();
const sessionId = uuidv4();

const mockActor = "testUser";
const mockUnitId = "unit1";
const mockXapiRegistrationId = registrationId;
const mockQuestion = "Profilname";
const mockAnswer = "Puzzlestar";
const mockStepIndex = 1;
const mockClassName = "3c";

describe("xAPI Statement Tests", () => {
  beforeEach(() => {
    // Erstellung einer gemockten Version von fetch
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("sendAnswerStatement sollte success: true ausgeben, wenn die richtige Antwort ausgewählt wurde", async () => {
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

    // Überprüfen, ob fetch mit dem richtigen success-Wert aufgerufen wurde
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining('"success":true'),
      })
    );
  });

  test("sendAnswerStatement sollte success: false ausgeben, wenn die falsche Antwort ausgewählt wurde", async () => {
    await sendAnswerStatement(
      mockUnitId,
      mockQuestion,
      mockAnswer,
      false,
      mockStepIndex,
      mockActor,
      mockXapiRegistrationId,
      mockClassName
    );

    // Überprüfen, ob fetch mit dem richtigen success-Wert aufgerufen wurde
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining('"success":false'),
      })
    );
  });
});
