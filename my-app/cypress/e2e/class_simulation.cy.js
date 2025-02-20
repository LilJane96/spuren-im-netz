describe("Simulation einer Klasse im Lernspiel", () => {
  const students = [
    { name: "Alice", password: "994spu31", class: "3c" },
    { name: "Bob", password: "994spu31", class: "3c" },
    { name: "Charlie", password: "994spu31", class: "3c" },
    { name: "Dana", password: "994spu31", class: "5a" },
    { name: "Erika", password: "994spu31", class: "5a" },
    { name: "Felix", password: "994spu31", class: "5a" },
  ];

  students.forEach((student) => {
    it(`Registrierung und Level 1 für ${student.name} mit zufälligen Antworten abschließen`, function () {
      cy.visit("http://localhost:3000/");
      cy.log("Seite geladen");

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

      // Zufällige Antworten für 5 Fragen
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
              cy.get(
                `:nth-child(${selectedAnswer}) > .AnswerBoxesComponent`
              ).click();

              // Statt immer nur auf den Button zu warten, prüfen wir zuerst, ob das Level beendet wurde
              cy.get("body").then(($body) => {
                if ($body.find(".imageDiv > img").length > 0) {
                  cy.log("Level abgeschlossen!");

                  return; // Beende den Versuch, da das Level fertig ist
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
