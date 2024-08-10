'use client';

import React from 'react';

import PantipPickTag from '@/components/pantipink/page';
import Pantiprealtime from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';

import MainpageGroupTag from './tagDetail';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />
      {/* <SlieData /> old */}
      <Pantiprealtime />
      <PantipPickTag />

      {/* nav icon  detail */}
      
      <MainpageGroupTag />
    </>
  );
};

export default ClientComponent;
