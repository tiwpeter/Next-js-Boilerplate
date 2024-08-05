"use client";
import React, { useState, useEffect } from 'react';
import IconComponent from './page';
import TagsComponent from './TagsComponent';

const group = ["food", "bangrak", "korea"];

const MainpageIcon = () => {
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    const determineNextTags = () => {
      const storedTags = JSON.parse(localStorage.getItem('currentTags')) || [];

      let newTags = [];
      if (storedTags.length === 0) {
        newTags = group.slice(0, 3);
      } else {
        const lastTag = storedTags[storedTags.length - 1];
        const currentIndex = group.indexOf(lastTag);
        const nextIndex = (currentIndex + 1) % group.length;
        newTags = [
          group[nextIndex],
          group[(nextIndex + 1) % group.length],
          group[(nextIndex + 2) % group.length]
        ];
      }

      return newTags;
    };

    const nextTags = determineNextTags();
    setCurrentTags(nextTags);
    // Save new tags to localStorage
    localStorage.setItem('currentTags', JSON.stringify(nextTags));
  }, []); 

  return (
    <div>
      {/* Loop through currentTags and render IconComponent and TagsComponent */}
      {currentTags.map((textEng, index) => (
        <React.Fragment key={index}>
          <IconComponent textEng={textEng} />
          <TagsComponent tag={textEng} /> {/* Pass textEng as tag prop */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainpageIcon;
