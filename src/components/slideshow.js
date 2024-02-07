import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const images = [
    { name: 'Samo danas 3 po ceni 2!', src: 't1.jfif' },
    { name: 'Snizenje 30%', src: 't2.jfif' },
    { name: 'Utorkom do 13h gratis limunada ', src: 't4.jfif' }
  ];
const delay = 3500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="slide">
            <img
              src={image.src}
              alt={`Slide ${idx + 1}`}
              style={{ opacity: index === idx ? 1 : 0 }}
            />
            <div className="image-name">{image.name}</div>
          </div>
        ))}
      </div>
  
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
  
  
};

export default Slideshow;
