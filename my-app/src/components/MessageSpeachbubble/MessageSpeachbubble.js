import AnnonymProfile from "../../images/AnnonymProfile.png"
import "./MessageSpeachbubble.css";

export default function MessageSpeachbubble({ text }) {

  return (
    <div className="MessageSpeachbubble">

   
    <div className="bubble-container container">

      <div className="overlay">
    <div className="bubble speech">
      <div className="circle"></div>
        {text}
      </div>
      <div className="content">
        <img src={AnnonymProfile} alt="Profilbild" className="contentImg"/>
      </div>
    </div>
    </div>
    </div>
  );
}
