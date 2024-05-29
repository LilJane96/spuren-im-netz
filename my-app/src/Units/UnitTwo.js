export default function UnitTwo() {
  const UnitTwo = {
    id: 2,
    name: "unit2",
    topic: "Unit 2: Interaktion mit Fremden",
    task: [
      {
        step: [
          {
            question: "Nachricht",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "Hast du verstanden, was ich nun machen muss? Soll ich die Nachricht akzeptieren oder lieber ablehnen?",
              },
              {
                type: "bold",
                content: "Wähle eine Antwort aus!",
              },
            ],
            phoneSimulatorStep: 6,
            title: "Nachrichten",
            answerboxes: [
              { answer: "Akzeptieren", right: false },
              { answer: "Ablehnen", right: true },
            ],
            rightAnswer: "Sehr gut!",
            wrongAnswer: "Probiere es nochmal! ",
            reason:
              "Es ist immer besser, zuerst die Anfrage abzulehnen, wenn man gar nicht weiß, wer hinter dieser Nachricht steckt.",
          },
        ],
      },
      {
        step: [
          {
            question: "Profilname",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "Puuh, nochmal Glück gehabt! Kannst du mir helfen herauszufinden, wer hinter diese Nachricht steckt? Ich habe den Namen in die Suchfunktion eingegeben.",
              },
              {
                type: "bold",
                content: "Welches Profil soll ich anklicken?",
              },
            ],
            phoneSimulatorStep: 7,
            title: "Suche",
            answerboxes: [
              { type: "text", answer: "FelixMüller", right: false },
              { type: "text", answer: "Felicia29", right: false },
              { type: "text", answer: "Felix", right: true },
            ],
            rightAnswer: "Super! Du hast die richtige Wahl getroffen.",
            wrongAnswer: "Schade, versuche es nochmal!",
          },
        ],
      },
      {
        step: [
          {
            question: "Profilstandort",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "Ahh, genau richtig, das war der richtige Name. Ich kann leider nicht erkennen, woher diese Person stammt. Kannst du mir hiermit helfen?",
              },
              {
                type: "bold",
                content: "Woher kommt diese Person?",
              },
            ],
            phoneSimulatorStep: 8,
            title: "Profil",
            answerboxes: [
              { answer: "Stuttgart", right: false },
              { answer: "Reutlingen", right: true },
              { answer: "Berlin", right: false },
            ],
            rightAnswer:
              "Ausgezeichnet! Die Person stammt aus Reutlingen. Das ist ganz schön merkwürdig, ich kenne niemanden aus dieser Stadt. Nun sind wir schon einen wichtigen Schritt weiter.",
            wrongAnswer:
              "Probiere es nochmal! Die Person stammt aus einem anderen Ort.",
          },
        ],
      },
      {
        step: [
          {
            question: "Profilalter",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "“Reutlingen”. Diese Stadt kenne ich gar nicht. Vielleicht ist einer meiner Fuchsfreunde umgezogen? Kannst du mir helfen herauszufinden, wie alt diese Person ist? Dann kann ich bestimmt genauer sagen, ob ich die Person kenne.",
              },
              {
                type: "bold",
                content: "Wie alt ist diese Person?",
              },
            ],
            phoneSimulatorStep: 9,
            title: "Profil",
            answerboxes: [
              { type: "text", answer: "39", right: true },
              { type: "text", answer: "12", right: false },
              { type: "text", answer: "19", right: false },
            ],
            rightAnswer: "Super! Die Person ist 39 Jahre alt. Klasse gemacht!!",
            wrongAnswer:
              "Guter Versuch! Aber leider stimmt das nicht. Probiere es nochmal!",
          },
        ],
      },
      {
        step: [
          {
            question: "Profilberuf",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "Oh, 39 Jahre alt? Das ist aber ganz schön alt. Alle meine Freunde sind viel jünger. Das ist schon sehr komisch. Kannst du mir noch sagen, welchen Beruf die Person ausübt? ",
              },
              {
                type: "bold",
                content: "Welchen Beruf hat die Person?",
              },
            ],
            phoneSimulatorStep: 10,
            title: "Profil",
            answerboxes: [
              { type: "text", answer: "Dieb", right: true },
              { type: "text", answer: "Lehrerin", right: false },
              { type: "text", answer: "Schauspieler", right: false },
            ],
            rightAnswer: "Super! Das ist die richtige Antwort",
            wrongAnswer: "Schade, versuche es nochmal!",
            reason:
              "Auf vielen Profilen kann man über eine Person Informationen sammeln. Dazu muss man nur mal die Beiträge der Person anschauen.",
          },
        ],
      },
    ],
  };

  return UnitTwo;
}
