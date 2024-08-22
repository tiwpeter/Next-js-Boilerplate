'use client';

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PantipMain />
        <MainTagHiz />
      </div>
    </>
  );
};

export default ClientComponent;
