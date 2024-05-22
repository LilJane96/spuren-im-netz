import { useState } from "react";
import AnnonymProfile from "../../../images/AnnonymProfile.png";
import "./MessageOfStranger.css";
import MessageSpeachbubble from "../../MessageSpeachbubble/MessageSpeachbubble";

export default function MessageOfStranger({ answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div className="MessageContainer">
      <div className="ImageContainer">
        <img src={AnnonymProfile} alt="Profilbild" className="ProfilePicture" />
        <p className="text">Felix</p>
      </div>
      <div className="MessageSpeachbubbleContainer">
        <img src={AnnonymProfile} alt="Profilbild" className="ProfilePicture" />
        <p className="speachBubble">Hey, wie geht es dir? Ich bin Felix. Möchtest du vielleicht Freunde werden?</p>
      </div>
      <div className="AcceptMessageViewContainer">
        <p className="firstText">
          Felix möchte dir eine Nachricht senden. Ihr folgt einander nicht
        </p>
        <p className="secondText">
          Möchtest du, dass Felix dir ab sofort Nachrichten senden kann? Er/sie
          kann nur dann sehen, ob du seine/ihre Anfrage gesehen hast, wenn du
          “Akzeptieren” auswählst.{" "}
        </p>
        <div>
          <div className="ButtonContainer">
            <button
              className={`btn accept ${
                answer === "Akzeptieren" ? "selected" : ""
              }`}>
              Annehmen
            </button>
            <button
              className={`btn notAccept ${
                answer === "Ablehnen" ? "selected" : ""
              }`}>
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
