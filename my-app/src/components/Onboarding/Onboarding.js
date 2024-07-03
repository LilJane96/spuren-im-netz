import { React, useState, useEffect } from "react";
import "./Onboarding.css";
import CustomButton from "../Button/CustomButton";

export default function Onboarding() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
      localStorage.setItem('hasVisitedBefore', true);
      setIsFirstVisit(true);
    }
  }, []);
    
  const incrementTextIndex = () => {
    setCurrentTextIndex((index) => index + 1);
  };

  const onboardingContent = [
    'Hallo Detektiv “name”, bevor wir unseren ersten gemeinsamen Fall lösen werden, möchte ich dir noch erklären wie alles funktioniert. Hier siehst du die ersten zwei Fälle. Wenn du einen Fall gemeinsam mit mir bearbeiten willst, dann klicke einfach drauf und schon geht es los!',
    'Umso mehr du mir bei meinen Fällen hilfst, desto mehr Belohnungen bekommst du. Dafür habe ich dir einen eigenen Rucksack mitgebracht. Hier kannst du deine ganzen Belohnungen sammeln und anschauen.',
    'Wenn du mal nicht weiter weißt, ist das kein Problem. Bei jedem Fall gibt es einige Tipps. Drücke auf “Hinweise”, um mehr zu erfahren.',
    'Bist du bereit? Dann lass uns gemeinsam starten!'
  ];

  return (
    <>
          {isFirstVisit && currentTextIndex < 4 ? (
              <div className="wrapper">
                    <div className="text">
                        <p className="textBubble">{onboardingContent[currentTextIndex]}</p>
                        <CustomButton
                            className="textButton"
                            name="Weiter"
                            type="primary"
                            onClick={incrementTextIndex}
                        ></CustomButton>
                    </div>
              </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
  