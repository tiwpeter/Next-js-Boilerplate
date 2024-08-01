'use client';

import React from 'react';

import Slidersecod from './Slidersecod';

const SecodSlie = () => {
  const datasli = [
    {
      id: 1,
      image:
        'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png',
      name: 'room ',
      link: '/',
    },
    {
      id: 2,
      image:
        'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg',
      name: 'ก้นครัว',
      link: '/room/',
    },
    {
      id: 3,
      image:
        'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png',
      name: 'ก้นครัว ',
      link: '#',
    },
    {
      id: 4,
      image: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg',
      name: 'ก้นครัว',
      link: '#',
    },
    {
      id: 5,
      image:
        'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg',
      name: 'wd',
      link: '/room/',
    },
  ];

  return (
    <div>
      SecodSlie
      <Slidersecod slides={datasli} />
    </div>
  );
};

export default SecodSlie;
