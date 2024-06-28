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
          <div className="bg-gray-300 w-60 h-80">
            <div>
              <i
                className="material-icons icon-va-8 p-lnr-8 cursor-pointer flex"
                onClick={toggleMenu}
              >
                menu
              </i>
            </div>
            {/* menu */}
            <div className={`bg-red-500 ${isMenuOpen ? 'w-299' : 'w-10'}`}>
              <ul className="pl-0">
                <li className={`${isMenuOpen ? 'flex items-center gap-2 mb-2' : ''}`}>
                  <span className="icon">📌</span>
                  {isMenuOpen ? (
                    <Link href="/" passHref>
                      <span
                        className="border-none text-gray-700 hover:text-gray-900 block py-2"
                        onClick={closeMenu}
                      >
                        {t('home_link')}
                      </span>
                    </Link>
                  ) : (
                    <span>Home</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
/*
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
>*/