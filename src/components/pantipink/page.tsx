'use client';

import './pagetag/css/tag.css';
import './pagetag/css/bottom.css';
import './pagetag/css/boxtestcolor2.css';
import './pagetag/css/boxtestcolor.css';
import './pagetag/css/te.css';

import React, { useEffect, useState } from 'react';

import StoreProvider from '@/features/store/StoreProvider';

import PantipSecondary from '../Pantip/PantipSecondary/page';
import TagpanTag from './pagetag/page';

const tags = ['Pantip Pick'];

const PantipPickTag = () => {
  const [currentTags, setCurrentTags] = useState<string[]>([]);

  useEffect(() => {
    const determineNextTags = () => {
      const storedTags = JSON.parse(
        localStorage.getItem('currentTags') || '[]',
      );

      let newTags = [];
      if (storedTags.length === 0) {
        newTags = tags.slice(0, 3);
      } else {
        const currentIndex = tags.indexOf(storedTags[storedTags.length - 1]);
        const nextIndex = (currentIndex + 1) % tags.length;
        newTags = [
          tags[nextIndex],
          /*
          tags[(nextIndex + 1) % tags.length],
          tags[(nextIndex + 2) % tags.length],
          */
        ];
      }

      localStorage.setItem('currentTags', JSON.stringify(newTags));
      return newTags;
    };

    const nextTags = determineNextTags();
    setCurrentTags(nextTags);
  }, []);

  return (
    <section className="flex w-[711px]">
      {/* <!--startmore--> */}
      <div style={{ width: '713px;' }}>
        <div
          className="mt-5"
          style={{
            backgroundColor: '#7f99ff',
            display: 'flex',
            minHeight: '43px',
            padding: '12px 16px',
            position: 'relative',
            whiteSpace: 'normal',
          }}
        >
          <h3>Pantip Pick </h3>
        </div>
        <StoreProvider>
          <PantipSecondary tag={currentTags} />
          {/* sting tag param */}
        </StoreProvider>
      </div>

      {/* <!--folder-> */}
      {/* Tag Section */}
      <div className="foder" style={{ marginLeft: '40px' }}>
        <div style={{ marginTop: '20px' }}>
          <div className="tagbox">
            <div className="nav1">
              <ul className="ww">
                <li className="jow1">แท็กฮิต</li>
                {/* สามารถเพิ่ม li อื่น ๆ ตามต้องการได้ */}
              </ul>
            </div>
          </div>
          <TagpanTag />
        </div>
      </div>
    </section>
  );
};

export default PantipPickTag;
