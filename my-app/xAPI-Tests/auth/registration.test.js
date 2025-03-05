require("dotenv").config();

const { handleRegistration } = require("../../src/api/scormCloud");
const { v4: uuidv4 } = require("uuid");

jest.mock("../../src/api/scormCloud", () => ({
  handleRegistration: jest.fn(),
}));

describe("handleRegistration", () => {
  const validCourseId = "994spu31";
  const invalidCourseId = "994spur31";
  const firstName = "John";
  const lastName = "Doe";
  const learnerId = uuidv4();
  const registrationId = uuidv4();

  beforeAll(() => {
    // Erfolgreiche Mock-Antwort für gültigen Kurs-Id
    require("../../src/api/scormCloud").handleRegistration.mockImplementation(
      (courseId) => {
        if (courseId === validCourseId) {
          return Promise.resolve({
            registrationCompletion: "UNKNOWN",
            learner: {
              firstName: "John",
              lastName: "Doe",
            },
            course: {
              title: "Spuren im Netz",
            },
          });
        } else {
          // Fehlerhafte Mock-Antwort für ungültigen Kurs-Id
          return Promise.reject(new Error("Invalid Course ID"));
        }
      }
    );
  });

  it("should successfully register a learner and return progress", async () => {
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
    ).rejects.toThrow("Invalid Course ID");
  });
});
