"use client"
import React, { useEffect, useState } from 'react';
import './pagetag/css/tag.css'
import './pagetag/css/bottom.css'
import './pagetag/css/boxtestcolor2.css'
import './pagetag/css/boxtestcolor.css'
import './pagetag/css/te.css'
import PageTagRealtime from './pageTagRealtime/page';
import TagPag from './TagPag';


// List of tags to display
const tags = ["นักแสดง", "วอลเลย์บอล", "เที่ยวญี่ปุ่น", "K-POP", "Instagram", "ละครโทรทัศน์"];

const getRandomTag = (usedTags) => {
  const unusedTags = tags.filter(tag => !usedTags.includes(tag));
  if (unusedTags.length === 0) {
    return null; // No tags left to show
  }
  const randomIndex = Math.floor(Math.random() * unusedTags.length);
  return unusedTags[randomIndex];
};

const TagSwitcher = ({  }) => {
  const [currentTag, setCurrentTag] = useState('');

  useEffect(() => {
    // Function to switch to a new tag
    const switchTag = () => {
      const storedTags = JSON.parse(localStorage.getItem( 'Tags')) || [];
      const newTag = getRandomTag(storedTags);
      
      if (newTag) {
        const updatedTags = [...storedTags, newTag];
        localStorage.setItem('Tags', JSON.stringify(updatedTags));
        setCurrentTag(newTag);
      } else {
        // Reset if all tags have been shown
        localStorage.removeItem( 'Tags');
        setCurrentTag(tags[0]);
      }
    };

    // Switch tag on component mount
    switchTag();
  }, []);

  return (
    <div className='AW'> 
      <div className="mt-5" style={{backgroundColor: "#7f99ff", display: "flex", minHeight: "43px", padding: "12px 16px", position: "relative", whiteSpace: "normal"}}>
        <h3>{currentTag}</h3>
      </div>
      <TagPag tag={currentTag} />
    </div>
  );

};
asda
const PantipTagreal = () => {
  return (
    <section className="flex">
      <div style={{ width: "713px" }}>

        <div>
          <TagSwitcher />
          <TagSwitcher />
          <TagSwitcher />

        </div>

      </div>
    </section>
  );
};

export default PantipTagreal;
