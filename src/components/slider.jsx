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
      src: "/filmLogos/Challengers.jpg",
      alt: "Film 3",
    },
    {
      src: "/filmLogos/wolfs-vend.jpg",
      alt: "Film 4",
    },
    {
      src: "/filmLogos/ArgylleSpy.jpg",
      alt: "Film 5",
    },
    {
      src: "/filmLogos/Fly-me-to-the-moon.jpg",
      alt: "Film 6",
    },
    {
      src: "/filmLogos/rez-ball.jpg",
      alt: "Film 7",
    },
    {
      src: "/filmLogos/arcadian.jpg",
      alt: "Film 8",
    },
    {
      src: "/filmLogos/Monkey_Man_(2024)_poster.jpg",
      alt: "Film 9",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filmLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filmLogos.length) % filmLogos.length
    );
  };

  const getVisiblePosters = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const index = (currentIndex + i) % filmLogos.length;
      return filmLogos[index];
    });
  };

  const visiblePosters = getVisiblePosters();

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slider-button">
        ❮
      </button>
      <div className="slider">
        {visiblePosters.map((poster, index) => (
          <img
            key={index}
            src={poster.src}
            alt={poster.alt}
            className="slider-image"
          />
        ))}
      </div>
      <button onClick={nextSlide} className="slider-button">
        ❯
      </button>
    </div>
  );
};

export default FilmSlider;
