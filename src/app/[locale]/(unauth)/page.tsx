'use client';

import React from 'react';

import PantipPickTag from '@/components/pantipink/page';
import Pantiprealtime from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';
import StoreProvider from '@/features/store/StoreProvider';

import MainpageIcon from './tagDetail';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />
      {/* <SlieData /> old */}
      <Pantiprealtime />
      <PantipPickTag />

      
      {/* nav icon  detail */}
      <MainpageIcon />
     
    </>
  );
};

export default ClientComponent;
