"use client"
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';
import { useState } from 'react';
import Nav from './nav/nav';
import Nab from './nab/nab';
import StickyNav from './scollnavstink/scollnavstink';

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
        <main className="bg-blue-200 flex h-[1600px]">
            <>
              <section className="flex justify-center w-full h-full">
                {/*connect page unauth = layout */}
                {props.children}</section>
            </>

        </main>

{/*component*/}
      </div>
    </div>
  );
};

export { BaseTemplate };