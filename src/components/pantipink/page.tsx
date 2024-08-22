'use client';

import './pagetag/css/tag.css';
import './pagetag/css/bottom.css';
import './pagetag/css/boxtestcolor2.css';
import './pagetag/css/boxtestcolor.css';
import './pagetag/css/te.css';

import React, { useState } from 'react';

import StoreProvider from '@/store/StoreProvider';

import PantipSecondary from '../Pantip/PantipSecondary/page';

const tags = ['Pantip Pick', 'Pantip Hitz'];

const PantipPickTag = () => {
  const [currentTags, setCurrentTags] = useState<string[]>(tags);

  return (
    <section
      className="flex "
      style={{ justifyContent: 'center', width: '100%' }}
    >
      {/* <!--startmore--> */}
      <div style={{ width: '713px' }}>
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
          <h2>{currentTags[0]}</h2>
          <PantipSecondary tag={currentTags[0]} />
          <h2>{currentTags[1]}</h2>
          <PantipSecondary tag={currentTags[1]} />
        </StoreProvider>
      </div>
    </section>
  );
};

export default PantipPickTag;
