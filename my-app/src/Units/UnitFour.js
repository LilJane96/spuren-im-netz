export default function UnitFour() {
    const UnitFour = {
      id: 3,
      name: "unit4",
      topic: "Unit 4: Werbung",
      task: [
        {
          step: [
            {
              question: "Werbung",
              speachbubble: [
                {
                  type: "paragraph",
                  content:
                    "Schau mal, was mir mein Handy angezeigt hat. Leider habe ich sowas nur selten gesehen.",
                },
                {
                  type: "bold",
                  content: "Was ist das hier überhaupt?",
                },
              ],
              phoneSimulatorStep: 19,
              title: "Werbung",
              answerboxes: [
                { type: "text", answer: "Fernsehsendung", right: false },
                { type: "text", answer: "Stundenplan", right: false },
                { type: "text", answer: "Werbung", right: true },
              ],
              rightAnswer: "Richtig!",
              wrongAnswer: "Probiere es nochmal! ",
              reason:
                "In den sozialen Medien erhält man immer wieder Angebote für neue Produkte oder Sachen, die man schon kennt. Diese Angebote nennt man auch Werbung.",
            },
          ],
        },
        {
          step: [
            {
              question: "Firma",
              speachbubble: [
                {
                  type: "paragraph",
                  content:
                    "Richtig! Das hier ist eine Werbung. Wieso bekomme ich solch eine Werbung? Das ist merkwürdig. Lass uns mehr über die Werbung herausfinden.",
                },
                {
                  type: "bold",
                  content: "Kannst du mir sagen, wer diese Werbung gemacht hat?",
                },
              ],
              phoneSimulatorStep: 19,
              title: "Firma",
              answerboxes: [
                { type: "text", answer: "Naike", right: true },
                { type: "text", answer: "Fortnite", right: false },
                { type: "text", answer: "Nutella", right: false },
              ],
              rightAnswer: "Super! Das war die richtige Antwort.",
              wrongAnswer: "Probiere es nochmal!",
              reason:
                "Es gibt viele Firmen, die Werbung für ihre Produkte machen. Meistens kann man diese an einem Logo erkennen. Auf dem Logo steht dann meistens der Name. Ein Logo ist wie ein Bild, mit dem man eine Firma eindeutig erkennen kann.",
            },
          ],
        },
        {
          step: [
            {
              question: "Bewertungen",
              speachbubble: [
                {
                  type: "paragraph",
                  content:
                    "Super! Die Werbung kommt von Naike. Ein ganz schön komischer Name für eine Firma. Was gibt es hier noch?",
                },
                {
                    type: "bold",
                    content:
                      "Oh, hier sind auch noch Bewertungen. Kannst du mir sagen, ob das gute oder schlechte Bewertungen sind?",
                },
              ],
              phoneSimulatorStep: 19,
              title: "Bewertungen",
              answerboxes: [
                { type: "text", answer: "Gute Bewertungen", right: false },
                { type: "text", answer: "Schlechte Bewertungen", right: true },
              ],
              rightAnswer: "Stimmt!",
              wrongAnswer: "Schade! Das war nicht die richtige Antwort.",
                reason:
                "Unter vielen Werbebeiträgen können Personen Nachrichten über das Produkt schreiben. Für viele Firmen ist dies sehr wichtig, weil sie allen Leuten zeigen wollen, dass ihr Produkt gut ist.",
            },
          ],
        },
        {
          step: [
            {
              question: "Produkt",
              speachbubble: [
                {
                  type: "bold",
                  content:
                    "Ohje! Diese Kommentare sagen nichts Gutes über dieses Produkt. Ganz viele schlechte Bewertungen",
                },
                {
                  type: "paragraph",
                  content: "Was ist das eigentlich für ein Produkt? Was kann ich hier kaufen? Kannst du mir helfen?",
                },
              ],
              phoneSimulatorStep: 19,
              title: "Produkt",
              answerboxes: [
                { type: "text", answer: "Ein neues Handy", right: false },
                { type: "text", answer: "Handyhüllen", right: true },
                { type: "text", answer: "Schuhe", right: false },
              ],
              rightAnswer: "Prima!",
              wrongAnswer: "Oh nein! Probiere es nochmal!",
              reason:
                "Bei einer Werbung muss man immer genau auf das Bild schauen und die Beschreibung dazu lesen, um zu erkennen, welches Produkt hier verkauft wird. Alle Informationen sind hier wichtig.",
            },
          ],
        },
        {
          step: [
            {
              question: "Preis",
              speachbubble: [
                {
                  type: "paragraph",
                  content: "Wow danke! Jetzt weiß ich fast alles über diese Werbung. Das ist ja was ganz anderes, als ich zuerst dachte.",
                },
                {
                    type: "bold",
                    content: "Eine Sache ist noch wichtig. Wie viel kostet das Produkt?",
                },
              ],
              phoneSimulatorStep: 19,
              title: "Preis",
              answerboxes: [
                { type: "text", answer: "1,99 Euro", right: false },
                { type: "text", answer: "1000 Euro", right: false },
                { type: "text", answer: "1 Euro", right: true },
              ],
              rightAnswer: "Sehr gut gemacht!",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason:
                "Wenn man Werbungen anschaut, muss man immer genau nach dem Preis schauen. Es gibt auch Rabatte für ein Produkt oder einen Preis, der von der Firma vorgeschlagen wird. Daher immer aufmerksam die Beschreibung lesen!",
            },
          ],
        },
      ],
    };
  
    return UnitFour;
  }
  