import { ScrollContainer } from "react-nice-scroll";
import House from "../../images/ProfileImages/House.png";
import Puzzle from "../../images/ProfileImages/Puzzle.png";
import Soccer from "../../images/ProfileImages/Soccer.png";
import Cube from "../../images/ProfileImages/Cube.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FoxProfilePic from "../../images/ProfileImages/FoxProfilePic.png";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageGallery from "../ImageGallery/ImageGallery";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import CustomButton from "../Button/CustomButton";
import "./GoodFoxProfile.css";

const images = [
  {
    id: 1,
    img: House,
    text: "Home Sweet Home",
  },
  { id: 2, img: Puzzle, text: "Puzzle Image" },
  { id: 3, img: Soccer, text: "Soccer Image" },
  { id: 4, img: Cube, text: "Cube Image" },
  { id: 5, img: ImageOne, text: "ImageOne Image" },
  { id: 6, img: ImageTwo, text: "ImageTwo Image" },
  { id: 7, img: ImageThree, text: "ImageThree Image" },
  { id: 8, img: ImageFour, text: "ImageFour Image" },
];

export default function GoodFoxProfile({ open, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImage(images.find((img) => img.id === imageId));
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleCloseProfile = () => {
    onClose();
  };

  return (
    <>
      {open && (
        <div className="GoodFoxProfileContainer">
          <div className="closeProfile">
            <CustomButton type="quaternary" onClick={handleCloseProfile} />
          </div>
          <div className="phoneContainer">
            <ScrollContainer>
              <div className="sectionContainer">
                <section className="section">
                  <div className="headerContainer">
                    <h3>Profil</h3>
                  </div>
                  <div className="social-media-learning-app">
                    <div className="middle-panel">
                      {selectedImage ? (
                        <div className="ImageScrollContainer">
                          <div>
                            <ArrowBackIcon
                              className="backBtn"
                              onClick={handleCloseLightbox}
                            />
                          </div>
                          <div>
                            <ImageGallery
                              name="Pixel der Fuchs"
                              profileImage={FoxProfilePic}
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
                              src={FoxProfilePic}
                              alt="Profilbild"
                              className="ProfilePicture"
                            />
                            <p className="text">Pixel der Fuchs</p>
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
                                🦊 Pixel | 21 | 🕵️ Social media detective <br />
                                📍 The wild forest 24, Oak 3 <br />
                                🇩🇪 Deutschland
                              </span>
                            </p>
                          </div>

                          <div className="Line" />
                          <div style={{ marginLeft: "6px" }}>
                            <ul className="ImageContainer">
                              {images.map((obj) => (
                                <li
                                  key={obj.id}
                                  onClick={() => handleImageClick(obj.id)}>
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
                    </div>
                  </div>
                </section>
              </div>
            </ScrollContainer>
          </div>
        </div>
      )}
    </>
  );
}
