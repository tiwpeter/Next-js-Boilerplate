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



/*
 <div className='bg-red-500' style={{ width: '1080px', height:'185px' }}>
        <div className='border border-gray-500 rounded-lg p-2'>
          <h1>Announce</h1>
        </div>
        <ul>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
          <li className='border border-gray-500 rounded-lg p-2'>asdas</li>
        </ul>
        {/*เลือกห้อง mt-4 top 
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>เลือกห้อง</h1>
        </div>
        <div>
          <div className='flex'>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
          </div>
          <div className='flex'>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
            <div className='bg-red-500 rounded-lg p-2' style={{ width: '88px', height:'99px' }}>ssw</div>
          </div>
        </div>
        {/*Highlight 
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Highlight</h1>
        </div>

        <div  className='bg-red-500 h-[285.7px] w-[1080px]">'>

        </div>

        {/*Pantip Realtime 
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Pantip Realtime</h1>
        </div>

        <div className='flex bg-red-500 h-[285.7px] w-[1080px] border border-black'>
          <div className='bg-red-500 rounded-lg p-2 border border-black' style={{ width: '539px', height:'99px' }}>ssw</div>
          <div className='bg-red-500 rounded-lg p-2 border border-black' style={{ width: '539px', height:'99px' }}>ssw</div>
        </div>

        {/*Pantip Pick 
        <div className='border border-gray-500 rounded-lg p-2 mt-6'>
          <h1>Pantip Pick </h1>
       </div>

       <div className='flex justify-between'>
      <div className='flex flex-col'>
        <div className='border border-black'>l</div>
        <div className='border border-black'>l</div>
      </div>
      <div className='border border-black'>r</div>
    </div>


      </div>
*/