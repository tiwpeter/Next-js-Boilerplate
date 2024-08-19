'use client';

import React, { useEffect, useState } from 'react';

import StoreProvider from '@/features/store/StoreProvider';

import PantipSecondary from './PantipSecondary/page';

// List of tags to display
const tags = ['Pantip Pick'];

export default function PantipIndexSecond() {
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
      <h1>Pantip Pick</h1>
      <StoreProvider>
        <PantipSecondary tag={currentTags} />
        {/* sting tag param */}
      </StoreProvider>
    </div>
  );
}
