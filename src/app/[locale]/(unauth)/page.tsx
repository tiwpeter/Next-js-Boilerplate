"use client";

import React from 'react';
import SlieData from '@/components/slie/slie';
import Pantiprealtime from '@/components/pantiprealtime/page';
import PantipPickTag from '@/components/pantipink/page';
import PantipTagreal from '@/components/pantiptagrealtime/page';
import { Provider } from 'react-redux';
import { store } from '../../../features/storemore';

const ClientComponent = () => {
  return (
    <>
      <SlieData />
      <Pantiprealtime />
      <PantipPickTag />
      <Provider store={store}>
        <PantipTagreal />
      </Provider>
    </>
  );
};

export default ClientComponent;