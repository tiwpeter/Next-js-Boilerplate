import React from 'react';

import ReactCardSlider from '../ImageSlider';
import data from '../../sliecod/data';


const Sli = () => (
  <div className="Slieroom">
    <ReactCardSlider slides={data} />
  </div>
);

export default Sli;
