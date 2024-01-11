export default function IntroductionArray() {
  return [
    {
      id: 1,
      name: "GameIntroduction",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/IntroductionImageOne.png",
          text: "Willkommen bei 'Spuren-im-Netz'! Hier taucht ihr in ein aufregendes Abenteuer ein, erkundet die faszinierende Welt des Internets und werdet zu meinen Helfern. Gemeinsam lösen wir eine Vielzahl von spannenden Fällen und entdecken dabei die Geheimnisse der digitalen Welt.",
        },
        {
          step: "stepTwo",
          backgroundImage: "/images/VillainsBoard.png",
          text: "Ich bin schon seit vielen Jahren als Detektiv tätig und habe zahlreiche Fälle gelöst! Hier links kannst du einige meiner Erfolge sehen. Aber in letzter Zeit gibt es einen Fall, der mich beschäftigt, und ich bräuchte deine Hilfe, um einen gefährlichen Dieb zu finden!",
        },
      ],
      navigate: "/hub",
    },
    {
      id: 2,
      name: "unit2",
      steps: [
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHome.png",
          text: "Eines Tages kam ich nach einem langen und anstrengenden Arbeitstag mit vielen laufenden Fällen nach Hause, zog meine bequemen Klamotten an und machte mich auf den Weg in mein Wohnzimmer, um einige Dinge auf meinem Telefon zu überprüfen.",
        },
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHomeTwo.png",
          text: "Ich war überrascht, als ich sah, dass ich eine neue Nachrichtenanfrage von jemandem namens Felix erhalten hatte. Ich glaube nicht, dass ich jemanden mit diesem Namen kenne.",
        },
        {
          step: "stepOne",
          backgroundImage: "/images/FoxHomeThree.png",
        },
      ],
      navigate: "/frameone/unit2/step1;",
    },
  ];
}
