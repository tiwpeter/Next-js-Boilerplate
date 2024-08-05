'use client';

import 'keen-slider/keen-slider.min.css';
import './css/iconslie.css'; // Assuming this imports your custom CSS

import { useKeenSlider } from 'keen-slider/react';
import React from 'react';

import Sli from '@/components/slie/slie';

const Room = () => {
  

  return (
    <div className="sw" style={{ width: '1096px' }}>
      <Sli />
    </div>
  );
};

export default Room;
