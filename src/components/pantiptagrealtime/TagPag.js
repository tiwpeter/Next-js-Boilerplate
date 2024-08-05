import React, { useState } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { SvgIcon } from '@mui/material';
import LoadMoreButton from '../more/more';
import './font.css';

const TagPage = ({ tag }) => {
  const [currentPage, setCurrentPage] = useState(1); // Local state for pagination

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

  const itemsPerPage = 4; // Adjust as per your requirement
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = data.slice(startIndex, startIndex + itemsPerPage);

  const loadMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <section
        className="dw container mx-auto"
        style={{
          background: 'aliceblue',
          overflow: 'hidden',
        }}
      >
        <ul
          className="flex flex-wrap"
          style={{ width: '100%', padding: '0', listStyle: 'none' }}
        >
          {visibleData.map((item) => (
            <li
              key={item.id}
              className="boxslie border p-2 "
              style={{ width: '100%', height: '86px' }}
            >
              <img
                src={item.url}
                alt="Placeholder Image"
                className="mr-2 w-12 h-12"
                style={{ width: '86px', height: '64px', float: 'left' }}
              />
              <div className="ml-2">
                <div>
                  <h2>
                    {item.name}
                    <div className="pt-list-item__title">
                      <a className="pick-link" href="">
                        <i className="pantip-icon"></i>
                        45 year
                      </a>
                    </div>
                  </h2>
                </div>

                <div className="list_tag">
                  <a className="pick-link" href="">
                    <i className="pantip-icon"></i>
                    tag
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <h5 className="text-center flex items-center">
                    <span>สมาชิกหมายเลข 7793648</span>
                    <span style={{ marginLeft: '6px' }}>21 ชั่วโมง</span>
                  </h5>

                  <div className="flex items-center">
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
      </section>
      <LoadMoreButton onClick={loadMoreData} />
    </div>
  );
};

export default TagPage;
