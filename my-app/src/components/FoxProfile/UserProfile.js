import { ScrollContainer } from "react-nice-scroll";
import House from "../../images/ProfileImages/ProfilGoodFox/House.png";
import PuzzleWorldMapGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleWorldMapGoodFox.jpg";
import SunsetGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/SunsetGoodFox.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FoxProfilePic from "../../images/foxPicture.svg";
import HomeGoodFox from "../../images/ProfileImages/ProfilGoodFox/HomeGoodFox.jpg";
import TablesGoodFox from "../../images/ProfileImages/ProfilGoodFox/TablesGoodFox.jpg";
import PuzzleGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleGoodFox.jpg";
import ForestWalkGoodFox from "../../images/ProfileImages/ProfilGoodFox/ForestWalkGoodFox.jpg";
import OfficeGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/OfficeGoodFox.jpg";
import ImageGallery from "../ImageGallery/ImageGallery";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import "./UserProfile.css";

const images = [
  {
    id: 1,
    img: House,
    text: "Mein Zuhause!",
  },
  { id: 2, img: PuzzleGoodFox, text: "Mein Lieblingshobby!" },
  { id: 3, img: TablesGoodFox, text: "Meine guten Freunde Elias und Niklas beim Tischkicker spielen." },
  { id: 4, img: HomeGoodFox, text: "Lange Straße 15 in Berlin, Herr Müller. So ein schönes Haus!" },
  { id: 5, img: ForestWalkGoodFox, text: "Schaut mal Leute, ich habe heute diese Menschen an meinem Haus vorbeilaufen gesehen und direkt ein Foto gemacht :D" },
  { id: 6, img: PuzzleWorldMapGoodFox, text: "Puuh, endlich geschafft! Hat aber Spaß gemacht!" },
  { id: 7, img: SunsetGoodFoxProfile, text: "Wooooooooow" },
  { id: 8, img: OfficeGoodFoxProfile, text: "Ab ins Büro, hier warten noch einige Fälle auf mich." },
];

export default function GoodFoxProfile({ open, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImage(images.find((img) => img.id === imageId));
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
                                🦊 Pixel | 21 | 🕵️ Detektiv für Soziale Medien <br />
                                📍 Im Wald 24, Eiche 3 <br />
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
    </>
  );
}
