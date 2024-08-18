'use client';

import React, { useEffect, useState } from 'react';

import CombinedComponent from './page';

const tags = ['ราชดำเนิน'];
/* , 'บางขุนพรหม', 'bankok' */

export default function MainpageGroupTag() {
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
      <h1>CombinedComponent</h1>
      <CombinedComponent tags={currentTags} />
      {/* <IconComponent tags={currentTags} />
      <DataComponent tags={currentTags} /> */}
    </div>
  );
}
