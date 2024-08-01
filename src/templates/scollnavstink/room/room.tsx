'use client';

import 'keen-slider/keen-slider.min.css';
import './css/iconslie.css'; // Assuming this imports your custom CSS

import { useKeenSlider } from 'keen-slider/react';
import React from 'react';

import Sli from '@/components/slie/slie';

const Room = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 9, // Display 9 slides at a time
    spacing: 1,
    drag: true,
  });

  const images = [
    {
      id: 1,
      url: 'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png',
      name: 'ก้นครัว',
    },
    {
      id: 2,
      url: 'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg',
      name: 'กรุงโซล',
    },
    {
      id: 3,
      url: 'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png',
      name: 'การ์ตูน',
    },
    {
      id: 4,
      url: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg',
      name: 'แกลเลอรี่',
    },
    {
      id: 5,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 5',
    },
    {
      id: 6,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 6',
    },
    {
      id: 7,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 7',
    },
    {
      id: 8,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 8',
    },
    {
      id: 9,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 9',
    },
    {
      id: 10,
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Image 10',
    },
  ];

  const chunks = [];
  for (let i = 0; i < images.length; i += 9) {
    chunks.push(images.slice(i, i + 9));
  }

  return (
    <div className="sw" style={{ width: '1096px' }}>
      <Sli />
    </div>
  );
};

export default Room;
