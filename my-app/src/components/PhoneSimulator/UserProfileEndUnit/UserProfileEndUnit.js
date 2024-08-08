import Backpack from "../../../images/ProfileImages/ProfilBadFox/Backpack.png";
import Bike from "../../../images/ProfileImages/ProfilBadFox/Bike.jpg";
import DVD from "../../../images/ProfileImages/ProfilBadFox/DVD.jpeg";
import Vacation from "../../../images/ProfileImages/ProfilBadFox/Vacation.svg";
import Profilepicture from "../../../images/ProfileImages/ProfilpictureFirst.png";
import BadFoxProfilePicture from "../../../images/ProfileImages/ProfilBadFox/BadFoxProfilePicture.svg";
import Crown from "../../../images/ProfileImages/ProfilBadFox/crown.svg";
import Car from "../../../images/ProfileImages/ProfilBadFox/car.svg";
import Home from "../../../images/ProfileImages/ProfilBadFox/Home.svg";
import Motorcyle from "../../../images/ProfileImages/ProfilBadFox/Bike.png";
import Games from "../../../images/ProfileImages/ProfilBadFox/games.svg";

import Bottombar from "../../Bottombar/Bottombar";
import { useEffect, useState } from "react";
import "./UserProfileEndUnit.css";
import { useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    img: Backpack,
    text: "Schaut mal, Leute, diese Person hat ihren Rucksack nicht sicher aufbewahrt 🔒 ... er gehört jetzt mir, haha",
  },
  {
    id: 2,
    img: Bike,
    text: "Mein neues Fahrrad. Stand hier einfach nur rum, so ein nettes Geschenk.",
  },
  {
    id: 3,
    img: Games,
    text: "Verkaufe hier gut erhaltene Spiele. Wie neu! 5 Euro das Stück",
  },
  { id: 4, img: Vacation, text: "Urlaub ist sehr schön!" },
  {
    id: 5,
    img: Motorcyle,
    text: "Mein Nachbar hat mir sein Mottorad für eine Probefahrt geliehen. Ich glaube, ich behalte es einfach :)",
  },
  {
    id: 6,
    img: Crown,
    text: "Glitzert so schön. Noch eine davon und dann ab in den Urlauuub :) :) :)",
  },
  {
    id: 7,
    img: Car,
    text: "Hab hier gerade ein Auto gefunden, das mir sehr gut gefällt. Würde es gerne haben! Wie sind nochmal die Öffnungszeiten?",
  },
  {
    id: 8,
    img: Home,
    text: "Meint ihr, hier gibt es etwas schönes glitzerndes für mich?",
  },
]

export default function UserProfileEndUnit() {
  const [currentImage, setCurrentImage] = useState(Profilepicture);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsFlipping(true);
    }, 1000);

    // Timer für die Flip-Animation
    setTimeout(() => {
      setCurrentImage(BadFoxProfilePicture);
      setIsFlipping(false);
    }, 2500);

    setTimeout(() => {
      navigate("/finishedGame/step2");
    }, 6500);
  }, []);

  return (
    <div className="UserProfileEndUnitContainer">
      <div className="SwitchProfilePictureContainer">
        <img
          src={currentImage}
          alt="Profilbild"
          className={`SkipProfilePicture ${isFlipping ? "flipAnimation" : ""}`}
        />
      </div>
      <div className="ProfileImageContainer">
        <img src={Profilepicture} alt="Profilbild" className="ProfilePicture" />
        <p className="text">Felix</p>
      </div>
      <div className="flexContainer">
        <div className="textContainer">
          <p className="count">26</p>
          <p className="text">Posts</p>
        </div>
        <div className="textContainer">
          <p className="count">128</p>
          <p className="text">Follower</p>
        </div>
        <div className="textContainer">
          <p className="count">28</p>
          <p className="text">Freunde</p>
        </div>
      </div>
      <div>
        <p className="answerText">
          <span>
            📍 Reutlingen <br />
            39
          </span>
        </p>
      </div>
      <div className="Line" />
      <div style={{ marginLeft: "6px" }}>
        <ul className="ImageContainer">
          {images.map((obj) => (
            <li key={obj.id}>
              <img src={obj.img} alt={obj.text} />
            </li>
          ))}
        </ul>
      </div>
      <div className="BottombarContainer">
        <Bottombar />
      </div>
    </div>
  );
}
