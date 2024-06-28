"use client"
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { useState } from 'react';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <BaseTemplate
      leftNav={
        <>
          <div>
            <i 
              className="material-icons icon-va-8 p-lnr-8 cursor-pointer flex"
              onClick={toggleMenu}
            >
              menu
            </i>
          </div>
          <div className={`bg-red-500 ${isMenuOpen ? 'w-299' : 'w-5'}`}>
            <ul className="pl-0">
              <li>
                <span className="icon">📌</span>
                {isMenuOpen ? (
                  <Link href="/" passHref>
                    <span
                      className="border-none text-gray-700 hover:text-gray-900 cursor-pointer block px-4 py-2"
                      onClick={closeMenu}
                    >
                      {t('home_link')}
                    </span>
                  </Link>
                ) : null}
              </li>
              <li>
                <span className="icon">📌</span>
                {isMenuOpen ? (
                  <Link
                    href="/about/"
                    className="border-none text-gray-700 hover:text-gray-900"
                    onClick={closeMenu}
                  >
                    {t('about_link')}
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}