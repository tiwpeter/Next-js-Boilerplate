import React from 'react';
import ReactCardSlider from './ImageSlider';
const data = [
  { id: 1, image: 'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png', name: '[Pantip Point] ' ,link: '/'},
  { id: 2, image: 'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg', name: 'ต้อนรับฟุตบอลยูโร”' ,link: '#'},
  { id: 3, image: 'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png', name: '🎧 PANTIP PODCAST ' ,link: '#' },
  { id: 4, image: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg', name: 'ชวนโชว์พื้นที่นั่งเล่นในบ้าน' ,link: '#'},
  { id: 5, image: 'https://example.com/image5.jpg', name: 'Image 5 ',link: '#' },
  { id: 6, image: 'https://example.com/image6.jpg', name: 'Image 6' ,link: '#'},
  { id: 7, image: 'https://example.com/image7.jpg', name: 'Image 7' ,link: '#'},
  { id: 8, image: 'https://example.com/image8.jpg', name: 'Image 8' ,link: '#'},
  { id: 9, image: 'https://example.com/image9.jpg', name: 'Image 9' ,link: '#'},
  
];
const Sli = () => (





  <div className="Sli">
    <div className="mt-5" style={{ background: '#7f99ff', display: 'flex', minHeight: '43px', padding: '12px 16px', position: 'relative', whiteSpace: 'normal', width: '1102px' }}>
      <h3>Highlight</h3>
    </div>
    <ReactCardSlider slides={data} />
  </div>
);

export default Sli;
