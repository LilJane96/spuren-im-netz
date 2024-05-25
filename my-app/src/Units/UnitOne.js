export default function UnitOne() {
  const userName = localStorage.getItem("userName");

  const unitOne = {
    id: 1,
    name: "unit1",
    topic: "Unit 1: Konto erstellen",
    task: [
      {
        step: [
          {
            question: "Profilname",
            speachbubble: [
              {
                type: "paragraph",
                content:
                  "Bevor du mir helfen kannst, müssen wir einen guten Namen für dein neues Konto aussuchen.",
              },
              {
                type: "bold",
                content: "Welchen Namen würdest du auswählen?",
              },
            ],
            phoneSimulatorStep: 1,
            title: "Konto erstellen",
            answerboxes: [
              { answer: userName, right: true },
              { answer: "Puzzlestar oder MegaMalerin", right: true },
              { answer: "Name meiner Oma ", right: false },
            ],
            rightAnswer: "Super! Das ist ein sehr guter Name.",
            wrongAnswer:
              "Schade, versuche es nochmal! Dieser Name ist nicht gut. " +
              "Denk daran, dass es wichtig ist, einen Namen zu wählen, der persönlich ist, aber gleichzeitig deine Identität schützt",
          },
        ],
      },
      {
        step: [
          {
            question: "Passwort",
            speachbubble: [
              {
                type: "bold",
                content: "Super! Nun haben wir einen guten Namen.",
              },
              {
                type: "paragraph",
                content:
                  "Wenn wir ein Konto erstellen wollen, müssen wir uns noch ein gutes Passwort ausdenken.",
              },
              {
                type: "bold",
                content: "Welches Passwort würdest du wählen?",
              },
            ],
            phoneSimulatorStep: 2,
            title: "Konto erstellen",
            answerboxes: [
              { type: "text", answer: "Passwort", right: false },
              { type: "text", answer: "kYh5&0!mlta", right: true },
              { type: "text", answer: "meinName123", right: false },
            ],
            rightAnswer: "Super! Das ist ein sehr gutes Passwort. ",
            wrongAnswer: "Probiere es noch einmal!",
            reason:
              "Ein Passwort sollte immer aus möglichst vielen Zeichen bestehen. Dafür verwendet man Buchstaben, Zahlen und Sonderzeichen wie z.B. !$%.",
          },
        ],
      },
      {
        step: [
          {
            question: "Öffentlich oder Privat",
            speachbubble: [
              {
                type: "paragraph",
                content: "Puuh, fast geschafft! ",
              },
              {
                type: "paragraph",
                content: "Eine wichtige Sache müssen wir noch machen.",
              },
              {
                type: "bold",
                content:
                  "Soll dein Konto für alle sichtbar sein oder nur für gute Freunde? Wähle aus!",
              },
            ],
            phoneSimulatorStep: 3,
            title: "Kontoeinstellungen",
            answerboxes: [
              { answer: "Privat", right: true },
              { answer: "Öffentlich", right: false },
            ],
            rightAnswer: "Super! Das ist eine gute Entscheidung.",
            wrongAnswer: "Schade, versuche es nochmal!",
            reason:
              "Dein Konto auf “öffentlich” zu stellen ist nicht gut, da sonst alle deine Bilder und Beiträge sehen können. Öffentliche Konten sind z.B. für Unternehmen, die sich ein Profil erstellen, um Werbung auf ihrem Profil für ihre Produkte zu machen.",
          },
        ],
      },
      {
        step: [
          {
            question: "Profilbild",
            speachbubble: [
              {
                type: "bold",
                content:
                  "Klasse! Jetzt hast du dein ganz eigenes Konto. So ein Konto nennt man auch Profil.",
              },
              {
                type: "paragraph",
                content:
                  "Auf meinem Profil hast du ja schon viele Bilder gesehen und dir genauer anschauen können. Lass uns gemeinsam auch für dein Profil ein Bild hochladen.",
              },
              {
                type: "bold",
                content: "Welches Bild würdest du hochladen?",
              },
            ],
            phoneSimulatorStep: 4,
            title: "Profileinstellungen",
            answerboxes: [
              {
                type: "image",
                answer: "natureIMG.png",
                imgAnswer: "Natur",
                right: true,
              },
              {
                type: "image",
                answer: "portraitIMG.png",
                imgAnswer: "Dein Porträt",
                right: false,
              },
              {
                type: "image",
                answer: "friendsIMG.png",
                imgAnswer: "Dein/-e  Freund/-in",
                right: false,
              },
              {
                type: "image",
                answer: "petsIMG.png",
                imgAnswer: "Dein Haustier",
                right: true,
              },
            ],
            rightAnswer: "Ausgezeichnet!",
            wrongAnswer: "Schade, versuche es nochmal!",
            reason:
              "Wenn du ein Bild hochlädst, solltest du immer gut überlegen, was darauf zu sehen ist. Andere Menschen möchten vielleicht gar nicht, dass du ein Foto von ihnen hochlädst. Dies ist auch verboten, man sollten die Personen immer zuerst fragen.",
          },
        ],
      },
      {
        step: [
          {
            question: "Informationen",
            speachbubble: [
              {
                type: "bold",
                content:
                  "Das sieht doch super aus! Wie ein echter Detektiv oder Detektivin!",
              },
              {
                type: "paragraph",
                content:
                  "Lass uns nun noch einige Informationen über dich zu deinem Profil hinzufügen. Überlege dir gut, welche Sachen du auf deinem Profil eintragen willst.",
              },
              {
                type: "bold",
                content:
                  "Welche Informationen hier würdest du deinem Profil hinzufügen?",
              },
            ],
            phoneSimulatorStep: 5,
            title: "Profileinstellungen",
            answerboxes: [
              {
                type: "text",
                answer: "13 \n📍Hermann Butzer Schule",
                right: false,
              },
              {
                type: "text",
                answer: "Fußballliebhaber ⚽ \nKünstlerin 🎨",
                right: true,
              },
              {
                type: "text",
                answer: "Alter und Adresse von meiner besten Freundin",
                right: false,
              },
            ],
            rightAnswer:
              "Super! Jetzt haben wir alle wichtigen Informationen in die Bio eingetragen.",
            wrongAnswer: "Schade, versuche es nochmal!",
            reason:
              "Wenn du Informationen auf deinem Profil über dich selbst mit anderen teilst, solltest du immer darauf achten, dass nicht zu viel über dich verraten wird. Du solltest auch keine Informationen über andere in deinem Profil teilen.",
          },
        ],
      },
    ],
  };

  return unitOne;
}
