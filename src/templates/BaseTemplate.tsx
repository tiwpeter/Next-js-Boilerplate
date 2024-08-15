'use client';

import StoreProvider from '@/features/store/StoreProvider';

import Nab from './nab/nab';
import Nav from './nav/nav';
import StickyNav from './scollnavstink/scollnavstink';

/* main layout */

const BaseTemplate = (props) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto">
        {/* Nav   */}
        <Nav />

        {/* Nab 2 */}
        <Nab />

        {/* StickyNav  */}
        <StickyNav />
        <StoreProvider>
          {/* component */}
          <main className="flex h-[3200px] justify-center bg-blue-200 ">
            <div>
              <h1>RootLayout</h1>
            </div>

            <section className="flex h-full w-[1078px]">
              {/* connect page unauth = layout */}
              {props.children}
            </section>
          </main>
          {/* component */}
        </StoreProvider>
      </div>
    </div>
  );
};

export { BaseTemplate };
