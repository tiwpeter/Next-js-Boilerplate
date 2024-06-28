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

  return (
    <BaseTemplate
      leftNav={
        <>
          <div>
            <i
              className="material-icons icon-va-8 p-lnr-8 cursor-pointer"
              onClick={toggleMenu}
            >
              menu
            </i>
          </div>

          {/* ใช้เงื่อนไขเพื่อตรวจสอบว่าเมนูเปิดหรือปิด */}
          <ul>
            <li>
            <span className="icon">📌</span>
              {isMenuOpen ? (
                <Link href="/" passHref>
                  <span className="border-none text-gray-700 hover:text-gray-900 cursor-pointer">
                    {t('home_link')}
                  </span>
                </Link>
              ) : null}
              {/* ในกรณีที่ต้องการเพิ่มเมนูอื่น ๆ สามารถเพิ่มได้ต่อไป */}
            </li>
            <li>
              
              {isMenuOpen ? (
                 <li>
                              <span className="icon">📌</span>
                 <Link
                   href="/about/"
                   className="border-none text-gray-700 hover:text-gray-900"
                 >
                   {t('about_link')}
                 </Link>
               </li>
              ) : null}
              {/* ในกรณีที่ต้องการเพิ่มเมนูอื่น ๆ สามารถเพิ่มได้ต่อไป */}
            </li>
          </ul>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}