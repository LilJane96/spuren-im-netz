import { useParams } from "react-router-dom";
import "./MyProfil.css";

export default function MyProfil({ answer }) {
  const { unitId } = useParams();
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
  const username = units[unitId].answers.map(
    (obj) => obj.question === "Profilname" && obj.answer
  );
  const profilePicture = units[unitId].answers
    .filter((obj) => obj.question === "Profilbild" && obj.answer)
    .map((obj) => obj.answer);

  return (
    <div className="MyProfilContainer">
      <div>
        <div className="ImageContainer">
          <img
            src={process.env.PUBLIC_URL + `/${profilePicture}`}
            alt="Profilbild"
            className="ProfilePicture"
          />
          <p className="text">{username}</p>
        </div>
        <div className="flexContainer">
          <div className="textContainer">
            <p className="count">0</p>
            <p className="text">Beiträge</p>
          </div>
          <div className="textContainer">
            <p className="count">0</p>
            <p className="text">Follower</p>
          </div>
          <div className="textContainer">
            <p className="count">0</p>
            <p className="text">Freunde</p>
          </div>
        </div>
        <div>
          {answer ? (
            <p className="answerText">{answer}</p>
          ) : (
            <p className="answerText"></p>
          )}
        </div>
        <div className="Line" />
      </div>
    </div>
  );
}
