describe("Lernspiel xAPI-Integration", () => {
  beforeEach(() => {
    cy.visit("/frameone/unit1/step1");
  });

  it("sollte xAPI-Statements für richtige und falsche Antworten senden", () => {
    cy.intercept("POST", "**/statements", { statusCode: 200 }).as(
      "xAPIRequest"
    );

    cy.get(".answer:first").click();
    cy.wait("@xAPIRequest")
      .its("request.body")
      .should("include", {
        verb: { id: "http://adlnet.gov/expapi/verbs/answered" },
      });

    cy.get(".buttonContainer button").contains("Weiter").click(); // Geht zur nächsten Frage
    cy.wait("@xAPIRequest")
      .its("request.body")
      .should("include", {
        verb: { id: "http://adlnet.gov/expapi/verbs/answered" },
      });
  });

  it("sollte xAPI-Level-End-Statement senden", () => {
    cy.intercept("POST", "**/statements", { statusCode: 200 }).as(
      "xAPIRequest"
    );

    cy.get(".buttonContainer button").contains("Level beenden").click();
    cy.wait("@xAPIRequest")
      .its("request.body")
      .should("include", {
        verb: { id: "http://adlnet.gov/expapi/verbs/completed" },
      });
  });
});
