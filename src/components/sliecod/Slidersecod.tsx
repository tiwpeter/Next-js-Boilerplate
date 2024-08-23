import './Slidersecod.css';
import './cuserlink.css';
import './buttoncolor.css';
import './fontSecod.css';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Slidersecod = (props) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // State for active card
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const checkScrollPosition = () => {
      if (slider.scrollLeft === 0) {
        setIsAtStart(true);
      } else {
        setIsAtStart(false);
      }

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };

    slider.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Initial check
    return () => slider.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const slideLeftsecod = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 500;
  };

  const slideRightsecod = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 500;
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="CopSecod"
      style={{
        margin: '0 222px',
        overflow: 'hidden',
        // padding: '8px 38px',
        width: 'calc(100% - 497px)',
        border: '1px solid #000', // กำหนดกรอบเป็นเส้นดำขนาด 1px
        background: 'aliceblue',
      }}
    >
      <div id="main-slider-Secod" style={{}}>
        {!isAtStart && (
          <div>
            <MdChevronLeft
              size={40}
              className="slider-icon-secod left"
              onClick={slideLeftsecod}
            />
          </div>
        )}
        <div className="sliecolor" id="slider-secod" ref={sliderRef}>
          {props.slides.map((slide, index) => (
            <Link href={slide.link} key={index} legacyBehavior>
              <a
                className={`slider-card-secod ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                <div
                  className="slider-card-image-secod"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                  }}
                />
                <p className="fontSecod">{slide.name}</p>
              </a>
            </Link>
          ))}
        </div>
        {!isAtEnd && (
          <div>
            <MdChevronRight
              size={40}
              className="slider-icon-secod right"
              onClick={slideRightsecod}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slidersecod;
