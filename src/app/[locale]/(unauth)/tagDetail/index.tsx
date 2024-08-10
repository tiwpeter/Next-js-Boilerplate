'use client';

import React, { useEffect, useState } from 'react';

import TagsComponent from './page';

const tagname = ['โอลิมปิก 2024', 'BLACKPINK (นักร้องนักดนตรี)', 'บางขุนพรหม'];

export default function MainpageGroupTag() {
  // ตั้งค่ารายการแท็กที่ต้องการส่งไปยัง component
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    const determineNextTags = () => {
      const storedTags = JSON.parse(localStorage.getItem('currentTags')) || [];

      let newTags = [];
      if (storedTags.length === 0) {
        newTags = tagname.slice(0, 3);
      } else {
        const currentIndex = tagname.indexOf(storedTags[storedTags.length - 1]);
        const nextIndex = (currentIndex + 1) % tagname.length;
        newTags = [
          tagname[nextIndex],
          tagname[(nextIndex + 1) % tagname.length],
          tagname[(nextIndex + 2) % tagname.length],
        ];
      }

      localStorage.setItem('currentTags', JSON.stringify(newTags));
      return newTags;
    };

    const nextTags = determineNextTags();
    setCurrentTags(nextTags);
  }, []);

  return (
    <div style={{ width: '713px' }}>
      {currentTags.map((tagname, index) => (
        <TagsComponent key={index} tagname={tagname} />
      ))}
    </div>
  );
}
{
  /*      <IconDataDisplay tags={tags} />
   */
}
