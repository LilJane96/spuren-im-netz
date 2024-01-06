import Backpack from "../../../images/ProfileImages/Backpack.png";
import Bike from "../../../images/ProfileImages/Bike.png";
import Breakfast from "../../../images/ProfileImages/Breakfast.png";
import Vaccation from "../../../images/ProfileImages/Vaccation.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profilepicture from "../../../images/SearchPearsonImages/Annonym.png";
import ImageOne from "../../../images/image1.jpg";
import ImageTwo from "../../../images/image2.jpg";
import ImageThree from "../../../images/image3.jpg";
import ImageFour from "../../../images/image4.jpg";
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
  { id: 2, img: Bike, text: "Bike Image" },
  { id: 3, img: Breakfast, text: "Breakfast Image" },
  { id: 4, img: Vaccation, text: "Vaccation Image" },
  { id: 5, img: ImageOne, text: "ImageOne Image" },
  { id: 6, img: ImageTwo, text: "ImageTwo Image" },
  { id: 7, img: ImageThree, text: "ImageThree Image" },
  { id: 8, img: ImageFour, text: "ImageFour Image" },
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
