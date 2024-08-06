

export default function Slider(){




  <div className="slider">
    <div className="slides">
      <div className="slide"><img src="" alt="Movie 1" /></div>
      <div className="slide"><img src="" alt="Movie 2" /></div>
      <div className="slide"><img src="" alt="Movie 3" /></div>
      <div className="slide"><img src="" alt="Movie 4" /></div>
      
    </div>
    <button className="sliderPrev" onClick={prevSlide()}></button>
    <button className="sliderNext" onClick={nextSlide()}></button>
  </div>;
}