import Backpack from "../../../images/ProfileImages/Backpack.png";
import Bike from "../../../images/ProfileImages/Bike.jpg";
import DVD from "../../../images/ProfileImages/DVD.jpeg";
import Playstation from "../../../images/ProfileImages/Playstation.jpeg";
import Vacation from "../../../images/ProfileImages/Vacation.jpg";
import Profilepicture from "../../../images/ProfileImages/ProfilpictureFirst.png";
import BadFoxProfilePicture from "../../../images/ProfileImages/BadFoxProfilePicture.png";
import Ring from "../../../images/ProfileImages/Ring.jpg";
import Grill from "../../../images/ProfileImages/Grill.jpg";
import HausPlaystation from "../../../images/ProfileImages/HausPlaystation.jpg";
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
    img: DVD,
    text: "Verkaufe hier gut erhaltene DVDs. Wie neu! 5 Euro das Stück",
  },
  { id: 4, img: Vacation, text: "Urlaub ist sehr schön!" },
  {
    id: 5,
    img: Playstation,
    text: "Habt ihr auch schon die neue PS5? Mein Nachbar hat sie einfach nicht mehr gebraucht, haha :D",
  },
  {
    id: 6,
    img: Ring,
    text: "Glitzert so schön. Noch einer davon und dann ab in den Urlauuub :) :) :)",
  },
  {
    id: 7,
    img: Grill,
    text: "Meint ihr das lohnt sich? Hm, muss ich nochmal einen Kollegen fragen.",
  },
  {
    id: 8,
    img: HausPlaystation,
    text: "Hab hier gerade im Wohnzimmer eine schöne Playstation 5 entdeckt, würde soooo gerne auch eine haben!",
  },
];

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
    }, 7000);
  }, []);

  return (
    <div className="UserProfileContainer">
      <div className="SwitchProfilePictureContainer">
        <img
          src={currentImage}
          alt="Profilbild"
          className={`ProfilePicture ${isFlipping ? "flipAnimation" : ""}`}
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
            📍 Standort <br />
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
