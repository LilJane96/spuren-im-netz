export default function IntroductionArray() {
  return [
    {
      id: 1,
      name: "GameIntroduction",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/Unit1-1.png",
          text: "Willkommen bei 'Spuren-im-Netz'! Hier taucht ihr in ein aufregendes Abenteuer ein, erkundet die faszinierende Welt des Internets und werdet zu meinen Helfern. ",
          speechbubblePosition: "center",
          speechbubbleSize: "big",
          speechbubbleMargin: "-68px",
        },
        {
          step: "stepTwo",
          backgroundImage: "/images/Unit1-2.png",
          text: "Ich bin schon seit vielen Jahren als Detektiv tätig und habe zahlreiche Fälle gelöst! Hier links kannst du einige meiner Erfolge sehen. Aber in letzter Zeit gibt es einen Fall, den ich ohne Hilfe nicht lösen kann!",
          speechbubblePosition: "flex-end",
          speechbubbleSize: "middle",
          speechbubbleMargin: "0",
        },
        {
          step: "stepThree",
          backgroundImage: "/images/Unit1-3.png",
          text: "Im Moment ist der Rucksack noch leer, aber er wird sich füllen, sobald wir anfangen. Ich hoffe, dir werden die Überraschungen gefallen, die ich für dich vorbereitet habe. Bereit, loszulegen?",
          speechbubblePosition: "center",
          speechbubbleSize: "big",
        },
        {
          step: "stepFour",
          backgroundImage: "/images/Unit1-4.png",
          text: "Schau dir diese tolle Karte an, wo alles Spannende passiert! Und weißt du was? Dein Rucksack ist gleich hier rechts, immer bereit für dich zum Entdecken und Benutzen! Aber zuerst möchte ich dir etwas zeigen! Klicke einfach auf 'Weiter'.",

          speechbubblePosition: "flex-start",
          speechbubbleSize: "middle",
          speechbubbleMargin: "0",
        },
        {
          step: "stepFive",
          component: "<GoodFoxProfile />",
          elementPostion: "center",
          text: "Das ist mein Profil! Du kannst nach oben und unten scrollen und auf die Bilder klicken, um mehr Details zu sehen. Sobald du mein Profil erkundet hast, klicke auf 'Weiter'",
          speechbubblePosition: "space-evenly",
          speechbubbleSize: "small",
          speechbubbleMargin: "0",
        },
      ],
      backTo: "/",
      navigate: "/hub",
    },
    {
      id: 2,
      name: "unit2",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHome.svg",
          text: "Puuuh, das war ein langer Tag. So viele Fälle auf einmal :( Jetzt muss ich mich erstmal ausruhen und frische Sachen anziehen. Oh, was ist denn das?? Ich habe eine Nachricht auf meinem Handy erhalten!",
        },
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHomeTwo.svg",
          text: "Felix hat mir eine Nachrichtenanfrage geschickt? Ich kenne doch gar keinen Felix, komisch. Kannst du mir weiterhelfen?",
        },
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHomeThree.svg",
        },
      ],
      backTo: "/hub",
      navigate: "/frameone/unit2/step1",
    },
    {
      id: 3,
      name: "unit3",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/Unit3-1.png",
          text: "Während Pixel sich seinem nächsten Fall widmet, hat Felix ganz andere Pläne. Er will aus dem Fuchsbau wieder ausbrechen!",
        },
        {
          step: "stepTwo",
          backgroundImage: "/images/Unit3-2.png",
          text: "Sehr gut, ein Fan von mir hat mir einen Schraubenzieher durch das Gitter geworfen! Jetzt kann ich endlich ausbrechen!!!",
          speechbubblePosition: "flex-start",
        },
        {
          step: "stepThree",
          backgroundImage: "/images/Unit3-3.png",
          text: "Niemand hat es bemerkt! Super! Jetzt kann ich weiter in den sozialen Medien meiner “Arbeit” nachgehen. Pixel wird sich wundern!",
          speechbubblePosition: "flex-start",
          speechbubbleSize: "small",
        },
        {
          step: "stepFour",
          backgroundImage: "/images/Unit3-4.png",
          text: "Oh nein, ich wurde zu einem Gruppenchat hinzugefügt. Felix ist doch im Fuchsbau, wer war das dann? Das ist mir noch nie passiert! Was sind das für Leute? Kannst du mir weiterhelfen?",
        },
      ],
      backTo: "/hub",
      navigate: "/frameone/unit3/step1",
    },
    {
      id: 4,
      name: "unit4",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/Unit4-1.png",
          text: "Oh, habt ihr das schon gesehen? Felix ist wieder im Fuchsbau gelandet, nachdem er ausgebrochen war. Sehr gut!",
          speechbubblePosition: "flex-end",
        },
        {
          step: "stepTwo",
          backgroundImage: "/images/Unit4-2.png",
          text: "Das ist mir gar nicht aufgefallen, wir haben ja schon den 27. Juli!! Meine beste Freundin Mara hat bald Geburtstag.",
          speechbubblePosition: "flex-end",
          speechbubbleSize: "small",
        },
        {
          step: "stepThree",
          backgroundImage: "/images/Unit4-3.png",
          text: "Ich brauche ein tolles Geschenk, was ihr gut gefällt, bevor ihr Geburtstag ist! Aber ich hab noch keine Idee, was ich ihr schenken kann. Ich schaue mal auf meinem Handy, was ich gutes finden kann.",
          speechbubblePosition: "flex-end",
        },
        {
          step: "stepFour",
          backgroundImage: "/images/Unit4-4.png",
          text: "Oh ja, hier wird mir etwas vorgeschlagen. Ich habe zwar nicht danach gesucht, aber das sieht echt gut aus. Die Werbung sieht nur etwas, naja, komisch aus. Kannst du mir hierbei weiterhelfen?",
          speechbubblePosition: "flex-end",
        },
      ],
      backTo: "/hub",
      navigate: "/frameone/unit4/step1",
    },
  ];
}
