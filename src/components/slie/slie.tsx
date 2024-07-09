"use client"
import React from 'react';
import studen1 from './students/Ellie_Anderson.jpg'
import studen2 from './students/John_Morgan.jpg'
import studen3 from './students/Mia_Williams.jpg'
import studen4 from './students/Nia_Adebayo.jpg'
import studen5 from './students/Rigo_Louie.jpg'
import { ImageSlider } from './ImageSlider';
import './sle2css/img-slieder.css';
import './sle2css/btn.css';

function SlieData() {
  const data = [studen1,studen2,studen3,studen4,studen5
  ];
  /*
   <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  */

    return (
      <div className='image-slider-container'>
    <ImageSlider imageUrls={data}/>
    </div>
  );

}

export default SlieData;