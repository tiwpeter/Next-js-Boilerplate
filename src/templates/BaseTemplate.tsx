'use client';

import StoreProvider from '@/store/StoreProvider';

import Nab from './nab/nab';
import Nav from './nav/nav';
import StickyNav from './scollnavstink/scollnavstink';

/* main layout */

const BaseTemplate = (props) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto flex min-h-screen flex-col bg-blue-200">
        {/* Nav */}
        <Nav />

        {/* Nab */}
        <Nab />

        {/* StickyNav */}
        <StickyNav />

        <StoreProvider>
          {/* component */}
          <main className="flex grow justify-center bg-blue-200">
            <section className="w-[1078px] grow justify-center">
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
