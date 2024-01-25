import Backpack from "../../../images/ProfileImages/ProfilBadFox/Backpack.png";
import Bike from "../../../images/ProfileImages/ProfilBadFox/Bike.jpg";
import DVD from "../../../images/ProfileImages/ProfilBadFox/DVD.jpeg";
import Playstation from "../../../images/ProfileImages/ProfilBadFox/Playstation.jpeg";
import Vacation from "../../../images/ProfileImages/ProfilBadFox/Vacation.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profilepicture from "../../../images/SearchPearsonImages/Annonym.png";
import Ring from "../../../images/ProfileImages/ProfilBadFox/Ring.jpg";
import Grill from "../../../images/ProfileImages/ProfilBadFox/Grill.jpg";
import HausPlaystation from "../../../images/ProfileImages/ProfilBadFox/HausPlaystation.jpg";
import Bottombar from "../../Bottombar/Bottombar";
import { useState } from "react";
import ImageGallery from "../../ImageGallery/ImageGallery";
import "./UserProfile.css";

const images = [
  {
    id: 1,
    img: Backpack,
    text: "Schaut mal, Leute, diese Person hat ihren Rucksack nicht sicher aufbewahrt 🔒 ... er gehört jetzt mir, haha",
  },
  { id: 2, img: Bike, text: "Mein neues Fahrrad. Stand hier einfach nur rum, so ein nettes Geschenk." },
  { id: 3, img: DVD, text: "Verkaufe hier gut erhaltene DVDs. Wie neu! 5 Euro das Stück" },
  { id: 4, img: Vacation, text: "Urlaub ist sehr schön! Ein guter Ort, um meinen 39. Geburtstag zu feiern." },
  { id: 5, img: Playstation, text: "Habt ihr auch schon die neue PS5? Mein Nachbar hat sie einfach nicht mehr gebraucht, haha :D" },
  { id: 6, img: Ring, text: "Glitzert so schön. Noch einer davon und dann ab in den Urlauuub :) :) :)" },
  { id: 7, img: Grill, text: "Meint ihr das lohnt sich? Hm, muss ich nochmal einen Kollegen fragen." },
  { id: 8, img: HausPlaystation, text: "Hab hier gerade im Wohnzimmer eine schöne Playstation 5 entdeckt, würde soooo gerne auch eine haben!" },
];

export default function UserProfile({ answer }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImage(images.find((img) => img.id === imageId));
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage ? (
        <div className="ImageScrollContainer">
          <div>
            <ArrowBackIcon className="backBtn" onClick={handleCloseLightbox} />
          </div>
          <div>
            <ImageGallery
              name="Felix"
              profileImage={Profilepicture}
              images={images}
              selectedIndex={images.findIndex(
                (img) => img.id === selectedImage.id
              )}
              onClose={handleCloseLightbox}
            />
          </div>
        </div>
      ) : (
        <div className="UserProfileContainer">
          <div className="ProfileImageContainer">
            <img
              src={Profilepicture}
              alt="Profilbild"
              className="ProfilePicture"
            />
            <p className="text">Felix</p>
          </div>
          <div className="flexContainer">
            <div className="textContainer">
              <p className="count">26</p>
              <p className="text">Beiträge</p>
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
                <li key={obj.id} onClick={() => handleImageClick(obj.id)}>
                  <img src={obj.img} alt={obj.text} />
                </li>
              ))}
            </ul>
          </div>
          <div className="BottombarContainer">
            <Bottombar />
          </div>
        </div>
      )}
    </>
  );
}
