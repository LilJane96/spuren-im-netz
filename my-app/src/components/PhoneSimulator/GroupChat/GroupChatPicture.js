import { useState, useRef, useEffect } from "react";
import SendImg from "../../../images/unit3/Send.svg";
import BadFoxPicture from "../../../images/ProfileImages/ProfilBadFox/BadFoxProfilePicture.svg";
import BadFoxWalking from "../../../images/unit3/BadFoxWalking.png";

export default function MessageOfStranger({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant', block: 'end' });
  }

  useEffect(scrollToBottom, []);

  return (
    <div className="GroupChat">
      <div className="Headline">
        Club schlechter Detektive
      </div>

      <div className="MessagesContainer">
        <div className="MessagesWrapper">

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name1">Böser Fuchs Felix</p>
              <img src={BadFoxWalking} alt="Profilbild" className="BigPicture" />
              Pixel hat letzte Woche jemandem Geld geklaut!
            </div>
            <img src={BadFoxPicture} alt="Profilbild" className="ProfilePicture" />
          </div>
        
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="SendMessage">
        <div className="InputMock">
          Nachricht schreiben...
        </div>
        <div className="SendImageContainer">
          <img src={SendImg} alt="Nachricht senden" className="SendImage" />
        </div>
      </div>
    </div>
  );
}
