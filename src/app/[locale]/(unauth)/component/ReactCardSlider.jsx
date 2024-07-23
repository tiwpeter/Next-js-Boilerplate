import React, { useState, useEffect } from 'react';
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ReactCardSlider = (props) => {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const checkScrollPosition = () => {
        var slider = document.getElementById("slider");
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

    useEffect(() => {
        var slider = document.getElementById("slider");
        slider.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition(); // Initial check
        return () => slider.removeEventListener('scroll', checkScrollPosition);
    }, []);

    return (
        <div id="main-slider-container">
            {!isAtStart && (
                <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            )}
            <div id="slider">
                {
                    props.slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            {!isAtEnd && (
                <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
            )}
        </div>
    );
}

export default ReactCardSlider;
