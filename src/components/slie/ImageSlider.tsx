import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIcons } from '@/features/IconReducer';
import type { AppDispatch, RootState } from '@/features/store/store';
import './Slider.css';

const ReactCardSlider = () => {
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const { data: icons, status } = useSelector((state: RootState) => state.icons);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIcons());
    }
  }, [dispatch, status]);

  React.useEffect(() => {
    if (status === 'succeeded' && icons.length > 0) {
      checkScrollPosition();
    }
  }, [status, icons]);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 500;
      setTimeout(checkScrollPosition, 300); // Delay to ensure scroll is complete
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 500;
      setTimeout(checkScrollPosition, 300); // Delay to ensure scroll is complete
    }
  };

  const checkScrollPosition = () => {
    const slider = document.getElementById('slider');
    const sliderContainer = document.querySelector('.sliecolor');

    if (slider && sliderContainer) {
      console.log("scrollLeft:", slider.scrollLeft);
      console.log("clientWidth:", slider.clientWidth);
      console.log("scrollWidth:", slider.scrollWidth);
      console.log("isAtStart:", slider.scrollLeft === 0);
      console.log("isAtEnd:", slider.scrollLeft + slider.clientWidth >= slider.scrollWidth);

      const isEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
      setIsAtEnd(isEnd);
      setIsAtStart(slider.scrollLeft === 0);

      sliderContainer.classList.toggle('hidden-right', isEnd);
      sliderContainer.classList.toggle('hidden-left', slider.scrollLeft === 0);
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
