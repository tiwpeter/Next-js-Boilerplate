'use client';

import React, { useEffect, useState } from 'react';

import StoreProvider from '@/store/StoreProvider';

import PantipRealtime from './pagepantip/page';

// List of tags to display
const tags = ['Pantip Realtime'];

export default function PantipIndex() {
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
    <div
      style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}
    >
      <div
        className="mt-3"
        style={{
          background: '#7f99ff',
          display: 'flex',
          minHeight: '43px',
          padding: '12px 16px',
          position: 'relative',
          whiteSpace: 'normal',
          width: '1078px',
        }}
      >
        <h3>Pantip Realtime</h3>
      </div>
      <StoreProvider>
        <PantipRealtime tag={currentTags} />
        {/* sting tag param */}
      </StoreProvider>
    </div>
  );
}
