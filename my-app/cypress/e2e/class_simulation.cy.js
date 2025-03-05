describe("Simulation einer Klasse im Lernspiel mit xAPI-Überprüfung", () => {
  const students = [
    { name: "Alice", password: "994spu31", class: "3c" },
    { name: "Bob", password: "994spu31", class: "3c" },
    { name: "Charlie", password: "994spu31", class: "5a" },
    { name: "Dana", password: "994spu31", class: "5a" },
  ];

  const app_id = Cypress.env("SCORM_CLOUD_APP_ID");
  const secret_key = Cypress.env("SCORM_CLOUD_SECRET_KEY");

  console.log("CREDENTIALS", app_id);
  console.log("CREDENTIALS, secret_key", secret_key);

  const getRandomWaitTime = () =>
    Math.floor(Math.random() * (5000 - 2000) + 2000); // 2 bis 5 Sekunden

  students.forEach((student) => {
    it(`Registrierung, Level 1 abschließen und xAPI-Statement überprüfen für ${student.name}`, function () {
      cy.visit("http://localhost:3000/");
      cy.log("Seite geladen");

      cy.intercept(
        "POST",
        "https://cloud.scorm.com/api/v2/registrations/**"
      ).as("registrationRequest");

      // Intercept für xAPI-Statements
      cy.intercept("POST", "https://cloud.scorm.com/tc/**").as("xapiRequest");

      // Registrierung
      cy.get(":nth-child(3) > div > .CustomButton").click();
      cy.get(":nth-child(1) > .InputfieldContainer > .inputfieldComponent")
        .clear()
        .type(student.name);
      cy.get(":nth-child(2) > .InputfieldContainer > .inputfieldComponent")
        .clear()
        .type(student.password);
      cy.get(":nth-child(3) > .InputfieldContainer > .inputfieldComponent")
        .clear()
        .type(student.class);
      cy.get(".btn-cstm-width > div > .CustomButton").click();

      // Warten, um sicherzustellen, dass die Registrierung abgeschlossen ist
      cy.wait(2000);

      // Registrierung aus SCORM Cloud abrufen und prüfen
      cy.request({
        method: "GET",
        url: "https://cloud.scorm.com/api/v2/registrations",
        headers: {
          Authorization: `Basic ${btoa(`${app_id}:${secret_key}`)}`,
          "Content-Type": "application/json",
          "X-Experience-API-Version": "1.0.3",
          Accept: "application/json",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.registrations).to.be.an("array");

        // // Die Registrierung für den aktuellen Schüler suchen
        // const registration = response.body.registrations.find(
        //   (reg) => reg.learner.id === student.name
        // );

        console.log("response.body.registrations", response.body.registrations);

        expect(
          response.body.registrations.map((req) => {
            expect(req).to.have.property("learner");
            expect(req.learner).to.have.property("id");
            return req.learner.id.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
            );
          })
        );
      });

      // Intro überspringen
      for (let i = 0; i < 5; i++) {
        cy.get(":nth-child(2) > .CustomButton").click();
      }

      // Level 1 starten
      cy.get(
        '[src="/static/media/Level1Unlocked.3a4ffed86476a24cda36.png"]'
      ).click();

      // Warten, bis die Fragen geladen sind
      cy.get(".AnswerBoxesComponent").should("be.visible");

      // Zufällige Antworten für 5 Fragen mit Wartezeiten
      for (let i = 0; i < 5; i++) {
        let triedAnswers = [];

        const tryAnswer = () => {
          cy.get(".AnswerBoxesComponent")
            .should("be.visible")
            .then(($answers) => {
              const availableAnswers = $answers.length;
              if (availableAnswers === 0) {
                cy.wait(2000);
                return tryAnswer();
              }

              let selectedAnswer;
              do {
                selectedAnswer =
                  Math.floor(Math.random() * availableAnswers) + 1;
              } while (triedAnswers.includes(selectedAnswer));

              triedAnswers.push(selectedAnswer);
              cy.wait(getRandomWaitTime()); // Zufällige Wartezeit vor der Antwort
              cy.get(
                `:nth-child(${selectedAnswer}) > .AnswerBoxesComponent`
              ).click();
              cy.wait(getRandomWaitTime()); // Zufällige Wartezeit nach der Antwort

              // Warten auf das xAPI-Statement
              cy.wait("@xapiRequest").then((interception) => {
                expect(interception.response.statusCode).to.eq(200);
                expect(interception.request.body).to.have.property("actor");
                expect(interception.request.body).to.have.property("verb");
                expect(interception.request.body).to.have.property("object");
                expect(interception.request.body.actor)
                  .to.have.property("name")
                  .that.matches(
                    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
                  );
              });

              cy.get("body").then(($body) => {
                if ($body.find(".imageDiv > img").length > 0) {
                  cy.log("Level abgeschlossen!");
                  return;
                }

                cy.get(".buttonContainer > :nth-child(2) > .CustomButton")
                  .should("be.visible")
                  .first()
                  .then(($btn) => {
                    if (!$btn.is(":disabled")) {
                      cy.wrap($btn).click();
                      cy.log("Richtige Antwort gefunden!");
                      cy.wait(1000);
                    } else if (triedAnswers.length <= availableAnswers) {
                      tryAnswer();
                    } else {
                      cy.log("Warnung: Keine richtige Antwort gefunden.");
                    }
                  });
              });
            });
        };

        tryAnswer();
      }

      // Level beenden
      cy.get(":nth-child(2) > :nth-child(2) > .CustomButton").click();
      cy.wait(3000);
      cy.get(".imageDiv > img").click();
      cy.get(".btn-cstm-width > div > .CustomButton").click();
    });
  });
});
