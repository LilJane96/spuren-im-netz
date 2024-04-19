import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profilepicture from "../../../images/SearchPearsonImages/Annonym.png";
import Bottombar from "../../Bottombar/Bottombar";
import { useState } from "react";
import ImageGallery from "../../ImageGallery/ImageGallery";
import "./UserProfile.css";

export default function UserProfile({ profileData, answer }) {
  console.log("profileData", profileData);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImage(profileData.images.find((img) => img.id === imageId));
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
              name={profileData.name}
              profileImage={profileData.profileImage}
              images={profileData.images}
              selectedIndex={profileData.images.findIndex(
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
              src={profileData.profileImage}
              alt="Profilbild"
              className="ProfilePicture"
            />
            <p className="text">{profileData.name}</p>
          </div>
          <div className="flexContainer">
            <div className="textContainer">
              <p className="count">{profileData.postsCount}</p>
              <p className="text">Beiträge</p>
            </div>
            <div className="textContainer">
              <p className="count">{profileData.followersCount}</p>
              <p className="text">Follower</p>
            </div>
            <div className="textContainer">
              <p className="count">{profileData.friendsCount}</p>
              <p className="text">Freunde</p>
            </div>
          </div>
          <div>
            <p className="answerText">
              {answer ? <span>{answer}</span> : <span>{profileData.bio}</span>}
            </p>
          </div>

          <div className="Line" />
          <div style={{ marginLeft: "6px" }}>
            <ul className="ImageContainer">
              {profileData.images.map((obj) => (
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
