'use client';

import React from 'react';

import PantipPickTag from '@/components/pantipink/page';
import PantipIndex from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />

      {/* <Pantiprealtime /> */}
      <PantipIndex />
      {/* <PantipIndexSecond /> */}
      <PantipPickTag />

      {/* <MainpageGroupTag /> */}
    </>
  );
};

export default ClientComponent;
