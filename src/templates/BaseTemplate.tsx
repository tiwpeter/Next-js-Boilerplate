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

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <div>
              <i
                className="material-icons icon-va-8 p-lnr-8 cursor-pointer"
                onClick={toggleMenu}
              >
                menu
              </i>
            </div>
            <h2 className="text-xl">{t('description')}</h2>
          </div>
        </header>

        <main className="bg-blue-200">

          <aside>{props.rightNav}</aside>
            <>
              <aside>{props.leftNav}</aside>
              <section>{props.children}</section>
            </>

        </main>
      </div>
    </div>
  );
};

export { BaseTemplate };