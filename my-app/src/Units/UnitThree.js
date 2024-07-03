export default function UnitThree() {
    const UnitThree = {
      id: 2,
      name: "unit3",
      topic: "Unit 3: Gruppen Chat",
      task: [
        {
          step: [
            {
              question: "Einladung",
              speachbubble: [
                {
                  type: "paragraph",
                  content:
                    "Jetzt brauche ich wirklich deine Hilfe. Kannst du mir sagen, in was für einem Chat ich hier gelandet bin?",
                },
                {
                  type: "bold",
                  content: "Wähle eine Antwort aus!",
                },
              ],
              phoneSimulatorStep: 14,
              title: "Nachrichten",
              answerboxes: [
                { type: "text", answer: "Einzelchat", right: false },
                { type: "text", answer: "Gruppenchat", right: true },
                { type: "text", answer: "Das ist gar kein Chat", right: false },
              ],
              rightAnswer: "Richtig!",
              wrongAnswer: "Probiere es nochmal! ",
              reason:
                "In den sozialen Medien gibt es verschiedene Arten Nachrichten zu schreiben. Einzelchats sind immer nur mit einer Person. In Gruppenchats können sehr viele Personen sein.",
            },
          ],
        },
        {
          step: [
            {
              question: "Erste Nachricht",
              speachbubble: [
                {
                  type: "paragraph",
                  content:
                    "Sehr gut! Wir sind in einem Gruppenchat gelandet. Schauen wir uns die erste Nachricht an, damit wir mehr über diesen Gruppenchat herausfinden können. Aber was schreibt denn Felix da in dem Gruppenchat über mich? Das stimmt doch gar nicht!",
                },
                {
                  type: "bold",
                  content: "Was denkst du? Darf Felix solch eine Nachricht über mich schreiben?",
                },
              ],
              phoneSimulatorStep: 15,
              title: "Nachrichten",
              answerboxes: [
                { type: "text", answer: "Ja, darf er.", right: false },
                { type: "text", answer: "Nein, darf er nicht.", right: true },
              ],
              rightAnswer: "Super! Das war die richtige Antwort.",
              wrongAnswer: "Probiere es nochmal!",
              reason:
                "Wenn man etwas über eine andere Person schreibt, sollte man immer freundlich bleiben. Auch in den sozialen Medien gibt es bestimmte Regeln, an die man sich halten muss. Beleidigungen oder falsche Aussagen über Personen sind nicht in Ordnung.",
            },
          ],
        },
        {
          step: [
            {
              question: "Bild",
              speachbubble: [
                {
                  type: "bold",
                  content:
                    "Sehr gute Antwort! Sowas darf man einfach nicht machen. Jetzt hat Felix sogar noch ein Bild gepostet???",
                },
                {
                  type: "paragraph",
                  content: "Das sieht ja aus wie ich! Ich bin doch gerade in meinem Büro, wie kann das sein? Kannst du mir helfen?",
                },
                {
                    type: "bold",
                    content:
                      "Ist dieses Bild wirklich echt?",
                },
              ],
              phoneSimulatorStep: 16,
              title: "Nachrichten",
              answerboxes: [
                { type: "text", answer: "Ja, es ist echt.", right: false },
                { type: "text", answer: "Nein es ist gefälscht.", right: true },
              ],
              rightAnswer: "Das hast du richtig gesehen! Das Bild ist nicht echt.",
              wrongAnswer: "Schade! Das war nicht die richtige Antwort.",
                reason:
                "Man kann in den sozialen Medien nicht nur Nachrichten austauschen, sondern auch Bilder. Allerdings Vorsicht! Bilder können auch bearbeitet werden. Wenn du ein Bild in den sozialen Medien siehst, schau immer genau hin!",
            },
          ],
        },
        {
          step: [
            {
              question: "Report",
              speachbubble: [
                {
                  type: "bold",
                  content:
                    "Super gemacht! Das Bild ist nicht echt. Felix versucht mich als Dieb darzustellen. So ein Fiesling!",
                },
                {
                  type: "paragraph",
                  content: "Die ganze Zeit bekomme ich neue Nachrichten aus der Gruppe. Nur schlechte Nachrichten über mich.",
                },
                {
                    type: "bold",
                    content: "Was soll ich jetzt tun? Kannst du mir helfen?",
                },
              ],
              phoneSimulatorStep: 17,
              title: "Nachrichten",
              answerboxes: [
                { type: "text", answer: "Eltern Bescheid geben", right: true },
                { type: "text", answer: "In der Gruppe bleiben", right: false },
                { type: "text", answer: "Meiner Lehrerin Bescheid geben", right: true },
              ],
              rightAnswer: "Prima!",
              wrongAnswer: "Oh nein! Probiere es nochmal!",
              reason:
                "Gruppen bestehen manchmal aus Personen die du selbst nicht kennst. Sobald die Personen deine Telefonnummer haben, können sie dich zu Gruppen hinzufügen. Wenn so etwas passiert ist es am besten die Gruppe einen Erwachsenen zu zeigen.",
            },
          ],
        },
        {
          step: [
            {
              question: "Optionen",
              speachbubble: [
                {
                  type: "bold",
                  content:
                    "Puuuh! Endlich bin ich raus aus dieser Gruppe. Es war eine gute Idee die Gruppe einem Erwachsenen zu zeigen.",
                },
                {
                  type: "paragraph",
                  content: "Ich möchte in Zukunft nicht mehr hinzugefügt werden. Das war echt gemein von Felix!",
                },
                {
                    type: "bold",
                    content:
                      "Was muss ich hier einstellen, damit Felix mich nicht mehr einfach so einladen kann?",
                  },
              ],
              phoneSimulatorStep: 18,
              title: "Einstellungen",
              answerboxes: [
                { type: "text", answer: "Alle", right: false },
                { type: "text", answer: "Meine Kontakte", right: true },
                { type: "text", answer: "Meine Kontakte, außer...", right: true },
              ],
              rightAnswer: "Sehr gut gemacht! Jetzt können mich nur noch meine Freunde zu Gruppen hinzufügen.",
              wrongAnswer: "Schade, versuche es nochmal!",
              reason:
                "Für sein eigenes Profil kann man viele Einstellungen vornehmen. Dies ist wichtig, damit nur die Personen, die du auch kennst, dich in eine Gruppe hinzufügen können.",
            },
          ],
        },
      ],
    };
  
    return UnitThree;
  }
  