"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIcons } from '../../redix/IconReducer'; // Ensure the path is correct
import { RootState, AppDispatch } from '../../../store/store'; // Ensure the path is correct
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import './imageicon.css';
import './id.css';
import './buttoncolor.css';

const ReactCardSliderIcon: React.FC = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const { data: icons, status } = useSelector((state: RootState) => state.icons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIcons());
    }
  }, [dispatch, status]);

  // Function to handle sliding left
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 500;
      checkScrollPosition();
    }
  };
  
  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 500;
      checkScrollPosition();
    }
  };
  
  ////////////////////////////////// */
  const checkScrollPosition = () => {
    const slider = document.getElementById('slider');
    const sliderContainer = document.querySelector('.sliecolor');
  
    if (slider && sliderContainer) {
      if (slider.scrollLeft <= 0) {
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
    }
  };
  
  useEffect(() => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      return () => slider.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <div className="slider-container" id='main-slider-container'>
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
      {status === 'succeeded' && icons.length > 0 ? (
  icons.map((icon, index) => (
    <section 
      key={index} // Use index as fallback if icon.id is not unique
      className={`slider-card ${index === activeIndex ? 'active' : ''}`}
    >
      <div
        className='slider-card-image'
        style={{
          backgroundImage: `url(${icon.background_image_url})`,
          backgroundSize: 'cover',
        }}
        onClick={() => {
          setActiveIndex(index);
          console.log('Clicked icon:', icon);
        }}
      >
        <p className="slider-card-title">{icon.text_eng}</p>
      </div>
    </section>
  ))
) : (
  <p>No icons available</p>
)}
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

export default ReactCardSliderIcon;
