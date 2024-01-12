import foxPicture from "../../images/foxPicture.png";
import "./Speachbubble.css";

export default function Speachbubble({ text, reason }) {
  return (
    <div className="SpeachbubbleContainer">
      <div className="bubble-container container">
        <div className="content">
          <img src={foxPicture} alt="Fox" className="foxImg" />
        </div>

        <div className="overlay">
          <div className="bubble speech">
            <div className="circle"></div>
            {Array.isArray(text) ? (
              text.map((paragraph, index) => {
                if (paragraph.type === "paragraph") {
                  return <p key={index}>{paragraph.content}</p>;
                } else if (paragraph.type === "bold") {
                  return (
                    <p key={index}>
                      <strong>{paragraph.content}</strong>
                    </p>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p style={{ fontWeight: "bold" }}>{text}</p>
            )}
            {reason !== "" && <p>{reason}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
