import { useEffect, useState } from "react";
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

import "./Privacy.css"
import SwitchComponent from "../../SwitchComponent/SwitchComponent";

export default function Privacy({answer}) {
    const [isPrivate, setIsPrivate] = useState(false);

    useEffect(() => {
      // Setze den Zustand basierend auf dem Wert von answer
      setIsPrivate(answer === "Privat");
    }, [answer]);

return (
    <div className="Privacy">
        <div className="PrivacyContainer">
            <div className="headlineContainer">
                <LockResetOutlinedIcon/>
              <h4 className="header">Privates Konto</h4>
            </div>
            <div className="SwitchContainer">
                <SwitchComponent initialState={isPrivate} />
            </div>
        </div>
        <div className="TextContainer">
            <p className="PrivacyText">
            Wenn du ein öffentliches Konto hast, kannst<br />
            du Inhalte mit einer breiten Öffentlichkeit<br />
            teilen, dein Netzwerk erweitern und deine<br />
            Sichtbarkeit erhöhen.
            </p>
           
            <p className="PrivacyText">
            Wenn du ein privates Konto hast, genießt<br />
            du mehr Schutz deiner Privatsphäre,<br />
            behältst die Kontrolle darüber, wer dir<br />
            folgen kann, und reduzierst das Risiko<br/>
            unerwünschter Aufmerksamkeit und<br/>
            Belästigung. Entscheide je nach deinen<br/>
            Zielen und Präferenzen.
            </p>

        </div>
    </div>
)
}