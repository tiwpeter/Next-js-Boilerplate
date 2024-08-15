'use client';

import Nab from './nab/nab';
import Nav from './nav/nav';
// import StickyNav from './scollnavstink/scollnavstink';
// import StoreProvider from '@/features/store/StoreProvider';

/* main layout */

const BaseTemplate = (props) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto">
        {/* Nav   */}
        <Nav />

        {/* Nab 2 */}
        <Nab />

        {/* StickyNav  
    <StickyNav/> */}

        {/* component */}
        <main className="flex h-[3200px] justify-center bg-blue-200 ">
          <div>
            <h1>RootLayout</h1>
          </div>

          {/* 
              <section className="flex w-[1078px] h-full">
                {/*connect page unauth = layout */}
          {/* {props.children}</section>
           */}
        </main>
        {/* component */}
      </div>
    </div>
  );
};

export { BaseTemplate };
