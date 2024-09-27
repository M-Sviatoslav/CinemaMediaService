import React, { useState } from 'react';


const FilmSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filmLogos = [
    {
      src: "/filmLogos/The_Fall_Guy_(2024)_poster.jpg",
      alt: "Film 1",
    },
    {
      src: "/filmLogos/Twisters2.jpg",
      alt: "Film 2",
    },
    {
      src: "/filmLogos/Road_House_2024.jpg",
      alt: "Film 3",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filmLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + filmLogos.length) % filmLogos.length
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slider-button">❮</button>
      <div className="slider">
        <img
          src={filmLogos[currentIndex].src}
          alt={filmLogos[currentIndex].alt}
          className="slider-image"
        />
      </div>
      <button onClick={nextSlide} className="slider-button">❯</button>
    </div>
  );
};

export default FilmSlider;
