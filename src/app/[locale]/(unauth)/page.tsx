'use client';

import React from 'react';

import PantipIndex from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />

      {/* <Pantiprealtime /> */}
      <PantipIndex />
      {/* <PantipIndexSecond /> 
      <PantipPickTag />

      <MainpageGroupTag /> */}
    </>
  );
};

export default ClientComponent;
