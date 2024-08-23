'use client';

import './stick.css';

import React from 'react';

import PantipIndex from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';

import PantipMain from './Pantip';
import MainTagHiz from './TagHiz';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />

      <PantipIndex />
      <div className="contaimain">
        <div className="container">
          <div className="pantip-main">
            <PantipMain />
          </div>
          <div className="main-tag-hiz">
            <MainTagHiz />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientComponent;
