import React, { useState, useEffect } from 'react';
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

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
                            <Link href={slide.link} key={index} legacyBehavior>
                                <a className="slider-card">
                                    <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                    <p className="slider-card-title">{slide.name}</p>
                                    <p className="slider-card-description">{slide.description}</p>
                                </a>
                            </Link>
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
