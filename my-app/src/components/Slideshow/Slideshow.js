import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS

function Slideshow({ images, duration }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(timer);
  }, [currentImageIndex, images.length, duration]);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt="" />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
}

export default Slideshow;