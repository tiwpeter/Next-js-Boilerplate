// import './Pagepantip.css';
import './font.css';

import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';

const Pagepantip = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define your images array
  const data = [
    {
      id: 1,
      url: 'https://ptcdn.info/doodle/2024/66668549caac0a7c9b16ead7_8t0jwfcpbp.png',
      name: '[Pantip Point] น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️',
    },
    {
      id: 2,
      url: 'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg',
      name: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล”',
    },
    {
      id: 3,
      url: 'https://ptcdn.info/home_highlight/2024-07/668646c5caac0af78631fad8_1osl902uzv_400.png',
      name: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊',
    },
    {
      id: 4,
      url: 'https://f.ptcdn.info/770/084/000/lyekkvfciohloZSbA1b-s.jpg',
      name: 'ชวนโชว์พื้นที่นั่งเล่นในบ้าน ลุ้นรับ pantip point 50 คะแนน 🌿🪑',
    },
    { id: 5, url: 'https://example.com/image5.jpg', name: 'Image 5' },
    { id: 6, url: 'https://example.com/image6.jpg', name: 'Image 6' },
    { id: 7, url: 'https://example.com/image7.jpg', name: 'Image 7' },
    { id: 8, url: 'https://example.com/image8.jpg', name: 'Image 8' },
    { id: 9, url: 'https://example.com/image9.jpg', name: 'Image 9' },
  ];

  // Determine how many items to show based on the expanded state
  const itemsToShow = isExpanded ? data : data.slice(0, 4); // Adjust the number of items shown when collapsed

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="dw container mx-auto"
      style={{
        height: 'auto',
        background: 'aliceblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1078px',
        padding: '20px',
      }}
    >
      <ul className="flex flex-wrap" style={{ width: '1080px' }}>
        {itemsToShow.map((item) => (
          <li
            key={item.id}
            className="boxslie flex items-start border p-2"
            style={{ width: '50%' }}
          >
            <img
              src={item.url}
              alt="Placeholder Image"
              className="mr-2 size-12"
              style={{ width: '86px', height: '64px' }}
            />

            <div
              className="flex h-full flex-col justify-between"
              style={{ width: '428px' }}
            >
              <div className="mb-4">
                {' '}
                {/* Adjust the margin-bottom as needed */}
                <h2>{item.name}</h2>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-end">
                  <h5 className="text-center">สมาชิกหมายเลข 7793648</h5>
                  <h5 className="text-center" style={{ marginLeft: '6px' }}>
                    21 ชั่วโมง
                  </h5>
                </div>

                <div className="pt-list-item__stats flex">
                  <span
                    style={{
                      fontSize: '.75rem',
                      marginRight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <SvgIcon
                      component={MessageIcon}
                      style={{ fontSize: '1rem', marginRight: '8px' }}
                    />
                    29
                  </span>

                  <span
                    style={{
                      fontSize: '.75rem',
                      marginRight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <SvgIcon
                      component={AddBoxIcon}
                      style={{ fontSize: '1rem', marginRight: '8px' }}
                    />
                    7
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleExpansion}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          background: 'lightblue',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default Pagepantip;
