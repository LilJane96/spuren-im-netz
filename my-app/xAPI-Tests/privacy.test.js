import axios from "axios";
import { fetchStudentsFromLRS } from "../src/components/XapiComponent/XapiComponent";

jest.mock("axios");

describe("Datenschutz-Test für xAPI-Statements aus SCORM Cloud", () => {
  it("sollte sicherstellen, dass die Statements keine echten Namen oder persönlichen Daten enthalten", async () => {
    const mockResponse = {
      data: {
        statements: [
          {
            actor: {
              name: "12345-abcde", // Erwartete learnerId
              mbox: "mailto:12345-abcde@example.com",
            },
            verb: { id: "http://adlnet.gov/expapi/verbs/answered" },
            object: { id: "https://example.com/xapi/units/1" },
          },
          {
            actor: {
              name: "Max Mustermann", // Sollte nicht vorkommen!
              mbox: "mailto:max.mustermann@example.com",
            },
            verb: { id: "http://adlnet.gov/expapi/verbs/answered" },
            object: { id: "https://example.com/xapi/units/2" },
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const students = await fetchStudentsFromLRS();

    students.forEach((studentName) => {
      // Prüft, dass die Namen nur IDs enthalten (keine echten Namen)
      expect(studentName).toMatch(/^[a-zA-Z0-9-]+$/);
    });
  });
});
