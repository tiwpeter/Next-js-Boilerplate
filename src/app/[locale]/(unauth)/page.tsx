'use client';

import React from 'react';

import PantipPickTag from '@/components/pantipink/page';
import Pantiprealtime from '@/components/pantiprealtime/page';
import SecodSlie from '@/components/sliecod/data';
import StoreProvider from '@/features/store/StoreProvider';

import MainpageIcon from './tagDetail';
import { Provider } from 'react-redux';
import PantipTagreal from '@/components/pantiptagrealtime/page';

import { store } from '../../../features/old/storemore';


const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />
      {/* <SlieData /> old */}
      <Pantiprealtime />
      <PantipPickTag />

      <StoreProvider>
        <MainpageIcon />
      </StoreProvider>

      <Provider store={store}>
        <PantipTagreal />
      </Provider>
    </>
  );
};

export default ClientComponent;
