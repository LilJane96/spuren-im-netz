const { handleRegistration } = require("../../src/api/scormCloud");
const { v4: uuidv4 } = require("uuid");

describe("handleRegistration", () => {
  const validCourseId = "994spu31";
  const invalidCourseId = "994spur31";
  const learnerId = uuidv4();
  const firstName = "John";
  const lastName = "Doe";

  it("should successfully register a learner and return progress", async () => {
    const registrationId = uuidv4();
    const result = await handleRegistration(
      validCourseId,
      learnerId,
      firstName,
      lastName,
      registrationId
    );

    expect(result).toMatchObject({
      registrationCompletion: "UNKNOWN",
      learner: {
        firstName: "John",
        lastName: "Doe",
      },
      course: {
        title: "Spuren im Netz",
      },
    });
  });

  jest.useRealTimers();
  it("should handle registration failure", async () => {
    jest.setTimeout(15000);
    const registrationId = uuidv4();

    await expect(
      handleRegistration(
        invalidCourseId,
        learnerId,
        firstName,
        lastName,
        registrationId
      )
    ).rejects.toThrow();
  });
});
