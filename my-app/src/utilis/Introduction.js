export default function IntroductionArray() {
  return [
    {
      id: 1,
      name: "GameIntroduction",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/IntroductionImageOne.png",
          text: "Willkommen bei 'Spuren-im-Netz'! Hier taucht ihr in ein aufregendes Abenteuer ein, erkundet die faszinierende Welt des Internets und werdet zu meinen Helfern. ",
          speechbubblePosition: "center",
          speechbubbleSize: "big",
          speechbubbleMargin: "-68px",
        },
        {
          step: "stepTwo",
          backgroundImage: "/images/VillainsBoard.png",
          text: "Ich bin schon seit vielen Jahren als Detektiv tätig und habe zahlreiche Fälle gelöst! Hier links kannst du einige meiner Erfolge sehen. Aber in letzter Zeit gibt es einen Fall, den ich ohne Hilfe nicht lösen kann!",
          speechbubblePosition: "flex-end",
          speechbubbleSize: "middle",
          speechbubbleMargin: "0",
        },
        {
          step: "stepThree",
          backgroundImage: "/images/IntroductionImageThree.svg",
          text: "Im Moment ist der Rucksack noch leer, aber er wird sich füllen, sobald wir anfangen. Ich hoffe, dir werden die Überraschungen gefallen, die ich für dich vorbereitet habe. Bereit, loszulegen?",
          speechbubblePosition: "center",
          speechbubbleSize: "big",
          speechbubbleMargin: "-68px",
        },
        {
          step: "stepFour",
          backgroundImage: "/images/IntroductionImageMap.png",
          text: "Schau dir diese tolle Karte an, wo alles Spannende passiert! Und weißt du was? Dein Rucksack ist gleich hier rechts, immer bereit für dich zum Entdecken und Benutzen! Aber zuerst möchte ich dir etwas zeigen! Klicke einfach auf 'Weiter'.",

          speechbubblePosition: "flex-end",
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
  ];
}
