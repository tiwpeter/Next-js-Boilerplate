"use client"
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';
import { useState } from 'react';

const test = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
/* max-w-screen-md */
{/**ml-2 (margin-left 2) และ mr-2 (margin-right 2)  */}
  return (
    <div>
      <input type="text" />
    </div>
  );
}
export { test };