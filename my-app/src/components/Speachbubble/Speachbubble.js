import foxPicture from "../../images/foxPicture.png";
import "./Speachbubble.css";

export default function Speachbubble({ text, getAnswer }) {

  return (
    <div className="bubble-container container">
      <div className="content">
        <img src={foxPicture} alt="Fox" className="foxImg"/>
      </div>
      
      <div className="overlay">
        <div className="bubble speech">
          <p>{text}</p>
          {getAnswer && <p className="answer">{getAnswer}</p>}
        </div>
      </div>
    </div>
  );
}
