"use client"
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';
import { useState } from 'react';

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
/* max-w-screen-md */
{/**ml-2 (margin-left 2) และ mr-2 (margin-right 2)  */}
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto">
      <div className="border-b border-gray-500 flex items-center space-x-4 py-2 justify-center">
        <div className='flex items-center'>
          <p className="ml-0">menu</p>
        </div>
        <div className='flex items-center'>
          <p className="ml-0">pantip</p>
        </div>
        <div className='flex items-center ml-auto'>
        <input
            type="text"
            className="border border-gray-400 rounded 
            ml-60 mr-60
            w-96 h-7
            "
          />
        </div>
        <div className='flex items-center'>
          <p>ตั้งกระทู้</p>
        </div>
        <div className='flex items-center'>
          <span className="flex space-x-1 ml-2">
            <span>เข้าสู่ระบบ</span>
            <span>/</span>
            <span>สมัครสมาชิค</span>
          </span>
        </div>
        </div>


{/*Nav */}






        <main className="bg-blue-200 flex h-[1300px]">

          <aside>{props.rightNav}</aside>
            <>
              <aside>{props.leftNav}</aside>
              <section className="flex justify-center w-full h-full">
                
                {props.children}</section>
            </>

        </main>
      </div>
    </div>
  );
};

export { BaseTemplate };