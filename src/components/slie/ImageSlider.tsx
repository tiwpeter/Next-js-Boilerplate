import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      {imageUrls.map((url, index) => (
        <Image
          key={url}
          src={url}
          className="img-slider-img"
          style={{
            transform: `translateX(${index === imageIndex ? 0 : -100}%)`,
            transition: 'transform 300ms ease-in-out',
          }}
          width={400} // Adjust width as needed
          height={300} // Adjust height as needed
          objectFit="cover"
        />
      ))}

      <button onClick={showPrevImage} className="btn-slider" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="btn-slider" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
