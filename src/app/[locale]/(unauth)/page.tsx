'use client';

import React from 'react';
import { Provider } from 'react-redux';

import PantipPickTag from '@/components/pantipink/page';
import Pantiprealtime from '@/components/pantiprealtime/page';
import PantipTagreal from '@/components/pantiptagrealtime/page';
import SecodSlie from '@/components/sliecod/data';

import { store } from '../../../features/storemore';

const ClientComponent = () => {
  return (
    <>
      {/* main secod */}
      <SecodSlie />
      {/* <SlieData /> old */}
      <Pantiprealtime />
      <PantipPickTag />
      <Provider store={store}>
        <PantipTagreal />
      </Provider>
    </>
  );
};

export default ClientComponent;
