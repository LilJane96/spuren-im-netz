import { useState, useRef, useEffect } from "react";
import SendImg from "../../../images/unit3/Send.svg";
import AnnonymProfile from "../../../images/AnnonymProfile.png";
import BadFoxPicture from "../../../images/ProfileImages/ProfilBadFox/BadFoxProfilePicture.svg";

import "./GroupChat.css";

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
        Club schlechter Detekitive
      </div>

      <div className="MessagesContainer">
        <div className="MessagesWrapper">

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name1">Böser Fuchs Felix</p>
              Hey , ich finde Detekitve echt uncool und schlau sind sie auch nicht
            </div>
            <img src={BadFoxPicture} alt="Profilbild" className="ProfilePicture" />
          </div>

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name2">Schildkröte</p>
              Vlt hast du recht und Detektive sind echt blöd
            </div>
            <img src={AnnonymProfile} alt="Profilbild" className="ProfilePicture" />
          </div>

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name3">Fisch</p>
              Vlt hast du recht und Detektive sind echt blöd            </div>
            <img src={AnnonymProfile} alt="Profilbild" className="ProfilePicture" />
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
