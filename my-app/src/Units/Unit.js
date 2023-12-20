const units = [
    {
      id: 1,
      name: "unit1",
      task: [
        {
          step: [
            { 
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
              answerboxes: [
                { answer: "Your name", right: true },
                { answer: "User123", right: false },
                { answer: "Something", right: false }
              ],
              rightAnswer: "Super! Das ist ein sehr guter Name.",
              wrongAnswer: "Schade, versuche es nochmal!"
            }
          ]
        },
        {
          step: [
            { 
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
              answerboxes: [
                { type: "text", answer: "Password", right: false },
                { type: "text", answer: "kYh5&0!mlta", right: true },
                { type: "text", answer: "meinName123", right: false },
              ],
              rightAnswer: "Super! Das ist ein sehr gutes Passwort. ",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason: "Du hast viele verschiedene Zeichen verwendet. Das wird es einem Hacker schwer machen, dass Passwort zu knacken."
            }
          ]
        },
        {
          step: [
            { 
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
              speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
              answerboxes: [
              { type: "image", answer: "image1.jpg", imgAnswer: "Nature image", right: true },
              { type: "image", answer: "image2.jpg", imgAnswer: "Self-portrait", right: false },
              { type: "image", answer: "image3.jpg", imgAnswer: "Self-portrait", right: false },
              { type: "image", answer: "image4.jpg", imgAnswer: "Image of idol", right: false },


              ],
              rightAnswer: "Super! Das ist ein sehr guter Name.",
              wrongAnswer: "Schade, versuche es nochmal!"
            }
          ]
      },
        {
          step: [
            { 
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
                  type: "paragraph",
                  content: "Welche Informationen hier würdest du deinem Profil hinzufügen?"
                },
              ],
              answerboxes: [
                { type: "text", answer: "Option 1", right: false },
                { type: "text", answer: "Option 2", right: true },
                { type: "text", answer: "Option 3", right: false },
              ],
              rightAnswer: "Super! Das ist eine gute Entscheidung.",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason: "Dein Profil auf “öffentlich” zu stellen ist nicht gut, da sonst jeder alles von deinen Bildern und Posts sehen kann. Öffentliche Profile sind z.B. für Unternehmen, die sich ein Profil erstellen, um Werbung auf ihrem Profil für ihre Produkte zu machen."
            }
          ]
          },
      ]
    },
    {
        id: 1,
        name: "unit2",
        task: [
          {
            step: [
              { 
                speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                answerboxes: [
                  { answer: "Your name", right: true },
                  { answer: "User123", right: false },
                  { answer: "Something", right: false }
                ],
                rightAnswer: "Super! Das ist ein sehr guter Name.",
                wrongAnswer: "Schade, versuche es nochmal!"
              }
            ]
          },
          {
            step: [
              { 
                speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                answerboxes: [
                  { answer: "Your name", right: true },
                  { answer: "User123", right: false },
                  { answer: "Something", right: false }
                ],
                rightAnswer: "Super! Das ist ein sehr guter Name.",
                wrongAnswer: "Schade, versuche es nochmal!"
              }
            ]
          },
          {
            step: [
              { 
                speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                answerboxes: [
                  { answer: "Your name", right: true },
                  { answer: "User123", right: false },
                  { answer: "Something", right: false }
                ],
                rightAnswer: "Super! Das ist ein sehr guter Name.",
                wrongAnswer: "Schade, versuche es nochmal!"
              }
            ]
          },
          {
            step: [
              { 
                speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                answerboxes: [
                  { answer: "Your name", right: true },
                  { answer: "User123", right: false },
                  { answer: "Something", right: false }
                ],
                rightAnswer: "Super! Das ist ein sehr guter Name.",
                wrongAnswer: "Schade, versuche es nochmal!"
              }
            ]
          },
            {
              step: [
                { 
                  speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                  answerboxes: [
                    { answer: "Your name", right: true },
                    { answer: "User123", right: false },
                    { answer: "Something", right: false }
                  ],
                  rightAnswer: "Super! Das ist ein sehr guter Name.",
                  wrongAnswer: "Schade, versuche es nochmal!"
                }
              ]
          },
          {
            step: [
              { 
                speachbubble: "Zuerst müssen wir einen guten Namen aussuchen. Welchen Namen würdest du auswählen?",
                answerboxes: [
                  { answer: "Your name", right: true },
                  { answer: "User123", right: false },
                  { answer: "Something", right: false }
                ],
                rightAnswer: "Super! Das ist ein sehr guter Name.",
                wrongAnswer: "Schade, versuche es nochmal!"
              }
            ]
            },
        ]
      },
  ];
  
  export default units;
  
  export const findUnitById = (unitId) => {
    return units.find((unit) => unit.name === unitId);
  };