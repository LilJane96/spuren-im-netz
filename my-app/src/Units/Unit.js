export default function UnitsArray() {
 const userName = localStorage.getItem('userName');

  return [
    {
      id: 1,
      name: "unit1",
      task: [
        {
          step: [
            { 
              question: "Username",
              speachbubble: [
                {
                  type: "paragraph",
                  content: "Zuerst müssen wir einen guten Namen aussuchen."
                },
                {
                  type: "bold",
                  content: "Welchen Namen würdest du auswählen?"
                }
              ],
              phoneSimulatorStep: 1,
              title: "Erstelle einen Account",
              answerboxes: [
                { answer: userName, right: false },
                { answer: "Fußballstar oder MegaMaler", right: true },
                { answer: "Name meiner Oma ", right: false }
              ],
              rightAnswer: "Super! Das ist ein sehr guter Name.",
              wrongAnswer: "Schade, versuche es nochmal! Dieser Name ist nicht gut. " +
                  "Denk daran, dass es wichtig ist, einen Namen zu wählen, der persönlich ist, aber gleichzeitig deine Identität schützt"
            }
          ]
        },
        {
          step: [
            { 
              question: "Passwort",
              speachbubble: [
                {
                  type: "bold",
                  content: "Super! Nun haben wir einen guten Namen."
                },
                {
                  type: "paragraph",
                  content: "Wenn wir ein Konto auf 'SocialMediaName' erstellen wollen, müssen wir uns noch ein gutes Passwort ausdenken."
                },
                {
                  type: "bold",
                  content: "Welches Passwort würdest du wählen?"
                }
              ],
              phoneSimulatorStep: 2,
              title: "Erstelle einen Account",
              answerboxes: [
                { type: "text", answer: "Password", right: false },
                { type: "text", answer: "kYh5&0!mlta", right: true },
                { type: "text", answer: "meinName123", right: false },
              ],
              rightAnswer: "Super! Das ist ein sehr gutes Passwort. ",
              wrongAnswer: "Probiere es noch einmal!",
              reason: "Ein Passwort sollte immer aus möglichst vielen Zeichen bestehen. Dafür verwendet man Buchstaben, Zahlen und Sonderzeichen wie z.B. !$%."
            }
          ]
        },
        {
          step: [
            { 
              question: "Privatsphäre",
              speachbubble: [
                {
                  type: "paragraph",
                  content: "Puuh, fast geschafft! "
                },
                {
                  type: "paragraph",
                  content: "Eine wichtige Sache müssen wir noch machen."
                },
                {
                  type: "bold",
                  content: "Soll dein Detektivprofil für alle sichtbar sein oder nur für gute Freunde? Wähle aus!"
                },
              ],
              phoneSimulatorStep: 3,
              title: "Erstelle einen Account",
              answerboxes: [
                { answer: "Privat", right: true },
                { answer: "Öffentlich", right: false },
              ],
              rightAnswer: "Super! Das ist eine gute Entscheidung.",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason: "Dein Profil auf “öffentlich” zu stellen ist nicht gut, da sonst jeder alles von deinen Bildern und Posts sehen kann. Öffentliche Profile sind z.B. für Unternehmen, die sich ein Profil erstellen, um Werbung auf ihrem Profil für ihre Produkte zu machen."
            }
          ]
        },
        {
          step: [
            { 
              question: "Profilbild",
              speachbubble: [
                {
                  type: "bold",
                  content: "Klasse! Jetzt hast du dein ganz eigenes Detektivprofil."
                },
                {
                  type: "paragraph",
                  content: "Auf meinem Profil hast du ja schon viele Bilder gesehen von meinen zahlreichen Fällen die ich schon gelöst habe. Lass uns gemeinsam auch für dein Profil ein Bild hochladen."
                },
                {
                  type: "bold",
                  content: "Welches Bild würdest du hochladen?"
                },
              ],
              phoneSimulatorStep: 4,
              title: "Erstelle einen Account",
              answerboxes: [
              { type: "image", answer: "natureIMG.png", imgAnswer: "Natur", right: true },
              { type: "image", answer: "portraitIMG.png", imgAnswer: "Dein Porträt", right: false },
              { type: "image", answer: "friendsIMG.png", imgAnswer: "Dein/-e  Freund/-in", right: false },
              { type: "image", answer: "petsIMG.png", imgAnswer: "Dein Haustier", right: true },


              ],
              rightAnswer: "Ausgezeichnet!",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason: "Wenn du ein Bild hochlädst, solltest du immer gut überlegen, was darauf zu sehen ist. Andere Menschen möchten vielleicht gar nicht, dass du ein Foto von Ihnen hochlädst. Dies ist auch verboten, man sollten die Personen immer zuerst fragen."
            }
          ]
      },
        {
          step: [
            { 
              question: "Informationen",
              speachbubble: [
                {
                  type: "bold",
                  content: "Das sieht doch super aus! Wie ein echter Meisterdetektiv! "
                },
                {
                  type: "paragraph",
                  content: "Lass uns nun noch einige Informationen über dich zu deinem Profil hinzufügen. Überlege dir gut, welche Sachen du auf deinem Profil eintragen willst."
                },
                {
                  type: "bold",
                  content: "Welche Informationen hier würdest du deinem Profil hinzufügen?"
                },
              ],
              phoneSimulatorStep: 5,
              title: "Erstelle einen Account",
              answerboxes: [
                { type: "text", answer: <span>13 <br />📍Hermann Butzer Schule</span>, right: false },
                { type: "text", answer: "Fußballliebhaber ⚽ | Künstler 🎨 ", right: true },
                { type: "text", answer: "Alter und Adresse von meinen Freunden", right: false },
              ],
              rightAnswer: "Super! Jetzt haben wir alle wichtigen Informationen in die Bio eingetragen.",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason: "Wenn du Informationen auf deinem Profil über dich selbst mit anderen teilst, solltest du immer darauf achten, dass nicht zu viel über dich verraten wird. Du solltest auch keine Informationen über andere in deinem Profil teilen."
            }
          ]
          },
      ]
    },
    {
        id: 2,
        name: "unit2",
        task: [
          {
            step: [
              { 
                question: "Message",
                speachbubble: [
                  {
                    type: "paragraph",
                    content: "Hast du verstanden, was ich nun machen muss? Soll ich die Nachricht aktzeptieren oder lieber ablehnen?"
                  },
                  {
                    type: "bold",
                    content: "Wähle eine Antwort aus!"
                  }
                ],
              phoneSimulatorStep: 6,
              title: "Nachrichten",
                answerboxes: [
                  { answer: "Akzeptieren", right: false },
                  { answer: "Ablehnen", right: true }
                ],
                rightAnswer: "Sehr gut!",
                wrongAnswer: "Probiere es nochmal! ",
                reason: "Es ist immer besser, zuerst die Anfrage abzulehnen, wenn man gar nicht weiß, wer hinter dieser Nachricht steckt."
              }
            ]
          },
          {
            step: [
              { 
                question: "Search",
                speachbubble: [
                  {
                    type: "paragraph",
                    content: "Puuh, nochmal Glück gehabt! Kannst du mir helfen herauszufinden, wer hinter diese Nachricht steckt? Ich habe den Namen in die Suchfunktion eingegeben."
                  },
                  {
                    type: "bold",
                    content: "Welches Profil soll ich anklicken?"
                  }
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
              }
            ]
          },
          {
            step: [
              { 
                question: "User profile",
                speachbubble: [
                  {
                    type: "paragraph",
                    content: "Ahh, genau richtig, das war der richtige Name. Ich kann leider nicht erkennen, woher diese Person stammt. Kannst du mir hiermit helfen?"
                  },
                  {
                    type: "bold",
                    content: "Woher kommt diese Person?"
                  },
                ],
              phoneSimulatorStep: 8,
              title: "Profil",
                answerboxes: [
                  { answer: "Stuttgart", right: false },
                  { answer: "Standort", right: true },
                  { answer: "Berlin", right: false },
                ],
                rightAnswer: "Ausgezeichnet! Die Person stammt aus Standort. Das ist ganz schön merkwürdig, ich kenne niemanden aus dieser Stadt. Nun sind wir schon einen wichtigen Schritt weiter.",
                wrongAnswer: "Probiere es nochmal! Die Person stammt von einem anderen Ort",
              }
            ]
          },
          {
            step: [
              { 
                question: "User Profile",
                speachbubble: [
                  {
                    type: "paragraph",
                    content: "“Standort”. Diese Stadt kenne ich gar nicht. Vielleicht ist einer meiner Fuchsfreunde umgezogen? Kannst du mir helfen herauszufinden, wie alt diese Person ist? Dann kann ich bestimmt genauer sagen, ob ich die Person kenne."
                  },
                  {
                    type: "bold",
                    content: "Wie alt ist diese Person?"
                  },
                ],
              phoneSimulatorStep: 9,
              title: "Profil",
                answerboxes: [
                  { type: "text", answer: "39", right: true },
                  { type: "text", answer: "12", right: false },
                  { type: "text", answer: "19", right: false },
                ],
                rightAnswer: "Super! Die Person ist 39 alt. Klasse gemacht!!",
                wrongAnswer: "Guter Versuch! Aber leider stimmt das nicht. Probiere es nochmal!",
              }
            ]
        },
          {
            step: [
              { 
                question: "User profile",
                speachbubble: [
                  {
                    type: "paragraph",
                    content: "Oh, 39 Jahre alt? Das ist aber ganz schön alt. Alle meine Freunde sind viel jünger. Das ist schon sehr komisch. Kannst du mir noch sagen, welchen Beruf die Person ausübt? "
                  },
                  {
                    type: "bold",
                    content: "Welchen Beruf hat die Person?"
                  },
                ],
              phoneSimulatorStep: 10,
              title: "Profil",
                answerboxes: [
                  { type: "text", answer: "Dieb", right: true },
                  { type: "text", answer: "Lehrer", right: false },
                  { type: "text", answer: "Schauspieler", right: false },
                ],
                rightAnswer: "Super! Das ist die richtige Antwort",
                wrongAnswer: "Schade, versuche es nochmal!",
                reason: "Auf vielen Profilen kann man über eine Person Informationen sammeln. Dazu muss man nur mal die Posts anschauen."
              }
            ]
            },
        ]
      },
  ];
}
