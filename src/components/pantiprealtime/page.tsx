'use client';

import React, { useEffect, useState } from 'react';

import StoreProvider from '@/features/store/StoreProvider';

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
    <div className="App">
      <h1>Pantip</h1>
      <StoreProvider>
        <PantipRealtime tag={currentTags} />
        {/* sting tag param */}
      </StoreProvider>
    </div>
  );
}
