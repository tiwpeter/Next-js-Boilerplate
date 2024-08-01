import './Slider.css';
import './cuserlink.css';
import './buttoncolor.css';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ReactCardSlider = (props) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // State for active card

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  const checkScrollPosition = () => {
    const slider = document.getElementById('slider');
    const sliderContainer = document.querySelector('.sliecolor');

    if (slider.scrollLeft === 0) {
      setIsAtStart(true);
      sliderContainer.classList.add('hidden-left');
    } else {
      setIsAtStart(false);
      sliderContainer.classList.remove('hidden-left');
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      setIsAtEnd(true);
      sliderContainer.classList.add('hidden-right');
    } else {
      setIsAtEnd(false);
      sliderContainer.classList.remove('hidden-right');
    }
  };

  useEffect(() => {
    const slider = document.getElementById('slider');
    slider.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Initial check
    return () => slider.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="main-slider-container">
      {!isAtStart && (
        <div>
          <MdChevronLeft
            size={40}
            className="slider-icon left"
            onClick={slideLeft}
          />
        </div>
      )}
      <div className="sliecolor" id="slider">
        {props.slides.map((slide, index) => (
          <Link href={slide.link} key={index} legacyBehavior>
            <a
              className={`slider-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                }}
              />
              <p className="slider-card-title">{slide.name}</p>
            </a>
          </Link>
        ))}
      </div>
      {!isAtEnd && (
        <div>
          <MdChevronRight
            size={40}
            className="slider-icon right"
            onClick={slideRight}
          />
        </div>
      )}
    </div>
  );
};

export default ReactCardSlider;
