import foxPicture from "../../images/foxPicture.png";
import "./Speachbubble.css";

export default function Speachbubble({ text }) {

  return (
    <div className="bubble-container container">
      <div className="content">
        <img src={foxPicture} alt="Fox" className="foxImg"/>
      </div>
      
      <div className="overlay"><p className="bubble speech">{text}</p></div>
    </div>
  );
}
