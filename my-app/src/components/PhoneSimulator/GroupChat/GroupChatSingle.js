import { useRef, useEffect } from "react";
import SendImg from "../../../images/unit3/Send.svg";
import BadFoxPicture from "../../../images/ProfileImages/ProfilBadFox/BadFoxProfilePicture.svg";

export default function MessageOfStranger({ answer }) {
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
              Pixel ist ein super schlechter Detektiv und blöd!
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
