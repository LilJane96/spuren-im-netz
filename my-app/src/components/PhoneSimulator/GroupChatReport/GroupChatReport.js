import { useRef, useEffect } from "react";
import SendImg from "../../../images/unit3/Send.svg";
import Report from "../../../images/unit3/Report.svg";
import BadFoxPicture from "../../../images/ProfileImages/ProfilBadFox/BadFoxProfilePicture.svg";
import BadFoxWalking from "../../../images/unit3/BadFoxWalking.png";
import AnonymProfile from "../../../images/AnonymProfile.png";

import "./GroupChatReport.css";

export default function MessageOfStranger({ answer }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
    });
  };

  useEffect(scrollToBottom, []);

  return (
    <div className="GroupChatReport">
      <div className="Headline">
        <p>Club schlechter Detektive</p>
        <img src={Report} alt="Report" />
      </div>

      <div className="MessagesContainer">
        <div className="MessagesWrapper">
          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name1">Böser Fuchs Felix</p>
              <img
                src={BadFoxWalking}
                alt="Profilbild"
                className="BigPicture"
              />
              <span>Pixel hat letzte Woche jemandem Geld geklaut!</span>
            </div>
            <img
              src={BadFoxPicture}
              alt="Profilbild"
              className="ProfilePicture"
            />
          </div>

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name2">Schildkröte</p>
              <span>Vlt hast du recht und Detektive sind echt blöd</span>
            </div>
            <img
              src={AnonymProfile}
              alt="Profilbild"
              className="ProfilePicture"
            />
          </div>

          <div className="MessageSpeachbubbleContainer">
            <div className="speachBubble">
              <p id="name3">Fisch</p>
              <span>Vlt hast du recht und Detektive sind echt blöd </span>
            </div>
            <img
              src={AnonymProfile}
              alt="Profilbild"
              className="ProfilePicture"
            />
          </div>

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="SendMessage">
        <div className="InputMock">
          <p>Nachricht schreiben...</p>
        </div>
        <div className="SendImageContainer">
          <img src={SendImg} alt="Nachricht senden" className="SendImage" />
        </div>
      </div>
    </div>
  );
}
