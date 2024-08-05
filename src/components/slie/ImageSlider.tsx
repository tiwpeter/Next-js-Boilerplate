import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIcons } from '@/features/IconReducer';
import type { AppDispatch, RootState } from '@/features/store/store';

import './Slider.css';
import './cuserlink.css';
import './buttoncolor.css';


const ReactCardSlider = () => {
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const { data: icons, status } = useSelector(
    (state: RootState) => state.icons,
  );

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIcons());
    }
  }, [dispatch, status]);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft += 500;
  };

  const checkScrollPosition = () => {
    const slider = document.getElementById('slider');
    const sliderContainer = document.querySelector('.sliecolor');

    if (slider && sliderContainer) {
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
    }
  };

  React.useEffect(() => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      return () => slider.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const handleClick = (index: number) => {
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
        {status === 'succeeded' && icons.length > 0 ? (
          icons.map((icon, index) => (
            <section
              key={index}
              className={`slider-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div
                className="slider-card-image"
                style={{
                  backgroundImage: `url(${icon.background_image_url})`,
                  backgroundSize: 'cover',
                }}
                onClick={() => handleClick(index)}
              />
              <p className="slider-card-title">{icon.text_eng}</p>
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

export default ReactCardSlider;
