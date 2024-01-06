import React, { useEffect, useRef } from "react";
import AnnonymProfile from "../../images/AnnonymProfile.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./ImageGallery.css";

export default function ImageGallery({
  name,
  profileImage,
  images,
  selectedIndex,
  onClose,
}) {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current && selectedIndex !== null) {
      const selectedImage = galleryRef.current.querySelector(
        `#image-${selectedIndex}`
      );
      if (selectedImage) {
        selectedImage.scrollIntoView({ behavior: "auto", block: "center" });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="ImageGalleryOverlay" onClick={onClose}>
      <div
        className="ImageGalleryContainer"
        onClick={(e) => e.stopPropagation()}
        ref={galleryRef}>
        <div className="GalleryContent">
          {images.map((img, index) => (
            <div
              className={`ImageBlock ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={img.id}
              id={`image-${index}`}>
              <div className="ProfileContainer">
                <img
                  src={profileImage}
                  className="ProfileImage"
                  alt="Profile"
                />
                <p>{name}</p>
              </div>
              <div>
                <img src={img.img} alt={img.text} />

                <div className="ProfileContainer">
                  <FavoriteBorderIcon className="icon" />
                  <ChatBubbleOutlineIcon className="icon" />
                  <BookmarkBorderIcon className="icon" />
                </div>

                <p>
                  <span>{name}</span> {img.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
