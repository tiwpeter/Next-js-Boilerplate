"use client"
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './opo.css'; // นำเข้าไฟล์ CSS ที่สร้างขึ้นใหม่

const SampleKeenSlider = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1, // Show one grid slide at a time
    spacing: 10,
    drag: true, // เปิดใช้งานการเลื่อนด้วยการลาก
  });

  const images = [
    { id: 1, url: 'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png', name: '[Pantip Point] น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️' },
    { id: 2, url: 'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg', name: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล”' },
    { id: 3, url: 'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png', name: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊' },
    { id: 4, url: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg', name: 'ชวนโชว์พื้นที่นั่งเล่นในบ้าน ลุ้นรับ pantip point 50 คะแนน 🌿🪑' },
    { id: 5, url: 'https://example.com/image5.jpg', name: 'Image 5' },
    { id: 6, url: 'https://example.com/image6.jpg', name: 'Image 6' },
    { id: 7, url: 'https://example.com/image7.jpg', name: 'Image 7' },
    { id: 8, url: 'https://example.com/image8.jpg', name: 'Image 8' },
    { id: 9, url: 'https://example.com/image9.jpg', name: 'Image 9' },
  ];

  const chunks = [];
  for (let i = 0; i < images.length; i += 4) {
    chunks.push(images.slice(i, i + 4));
  }

  return (
    
    <div className="sw" style={{ width: '1000px' }}> {/*container */}
    {/*container2 */}
    <div className="sw" style={{ width: '100%', background: 'aquamarine', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={sliderRef} className="keen-slider">
        {chunks.map((chunk, index) => (
          <div key={index} className="keen-slider__slide">
            {chunk.map(image => (
              
                <div className="slide-item" key={image.id}>
                  <img src={image.url} alt={`Slide ${image.id}`} />
                  <p>{image.name}</p>
                </div>
              
            ))}
          </div>
        ))}
      </div>
    </div>
      <div className="slider-controls">
        <button className="slider-button" onClick={() => slider.current?.prev()}>{"<"}</button>
        <button className="slider-button" onClick={() => slider.current?.next()}>{">"}</button>
      </div>
    </div>
  );
};

export default SampleKeenSlider;
