import { sendXAPIStatementWithLRS } from "../../src/components/XapiComponent/XapiComponent";

const url = process.env.REACT_APP_SCORM_CLOUD_LRS_ENDPOINT + "/statements";
const app_id = process.env.REACT_APP_SCORM_CLOUD_APP_ID;
const secret_key = process.env.REACT_APP_SCORM_CLOUD_SECRET_KEY;

describe("Authorization Tests for sendXAPIStatementWithLRS", () => {
  const mockStatement = {
    actor: { mbox: "mailto:test@example.com" },
    verb: { id: "http://adlnet.gov/expapi/verbs/attempted" },
    object: { id: "http://example.com/activity" },
  };

  console.log("url", url);
  afterEach(() => {
    jest.clearAllMocks();
  });

  const validAuthHeader = {
    Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
    "Content-Type": "application/json",
    "X-Experience-API-Version": "1.0.3",
  };

  const inValidAuthHeader = {
    Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
    "Content-Type": "application/json",
    "X-Experience-API-Version": "1.0.3",
  };

  test("should send statement successfully with valid authorization", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    });
    await sendXAPIStatementWithLRS(mockStatement);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(url),
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining(validAuthHeader),
        body: JSON.stringify(mockStatement),
      })
    );
  });

  test("should fail with 401 error on invalid authorization", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Unauthorized" }),
      status: 401,
    });

    await expect(sendXAPIStatementWithLRS(mockStatement)).rejects.toThrow(
      "HTTP Fehler 401"
    );

    expect(fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining(inValidAuthHeader),
        body: JSON.stringify(mockStatement),
      })
    );
  });
});
