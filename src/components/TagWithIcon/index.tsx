'use client';

import React, { useEffect, useState } from 'react';

import CombinedComponent from './page';

const tags = ['ราชดำเนิน', 'บางขุนพรหม', 'bankok'];
/* , 'บางขุนพรหม', 'bankok' */

export default function MainpageGroupTag() {
  const [currentTags, setCurrentTags] = useState<string[]>([]);

  useEffect(() => {
    const determineNextTags = () => {
      const storedTags = JSON.parse(
        localStorage.getItem('currentTags') || '[]',
      );

      const currentIndex = tags.indexOf(storedTags[storedTags.length - 1]);
      const newTagsCount = Math.min(storedTags.length + 1, tags.length);
      const newTags = [];

      for (let i = 0; i < newTagsCount; i++) {
        newTags.push(tags[(currentIndex + i) % tags.length]);
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
