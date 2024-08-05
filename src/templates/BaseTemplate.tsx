"use client"
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';
import { useState } from 'react';
import Nav from './nav/nav';
import Nab from './nab/nab';
import StickyNav from './scollnavstink/scollnavstink';
import StoreProvider from '@/features/store/StoreProvider';

/* main layout */


/* max-w-screen-md */
{/**ml-2 (margin-left 2) และ mr-2 (margin-right 2)  */}
const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('BaseTemplate');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  {/*nav */}


  return (
    <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto">
      
  {/* Hero layout */}

{/*Nav */}
    <Nav/>
  
{/*Nab */}
    <Nab/>

{/*StickyNav  */}
    <StickyNav/>

{/*component*/}
<StoreProvider>
        <main className="bg-blue-200 justify-center flex h-[3200px] ">
            <>
              <section className="flex w-[1078px] h-full">
                {/*connect page unauth = layout */}
                {props.children}</section>
            </>

        </main>
        </StoreProvider>
{/*component*/}
      </div>
    </div>
  );
};

export { BaseTemplate };