"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';
import ReactCardSlider from './component/ReactCardSlider';
import './App.css';


export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');
  const [activeLink, setActiveLink] = useState('/');

  const data = [
    { name: t('home_link'), link: '/',image:"https://picsum.photos/200/300" },
    { name: t('about_link'), link: '/about/',image:"https://picsum.photos/200/300" },
    { name: 'Room', link: '/room/',image:"https://picsum.photos/200/300" },
    { name: 'dw', link: '/room/',image:"https://picsum.photos/600/500" },
    { name: 'Icon', link: '/room/',image:"https://picsum.photos/600/500" }

  ];

  return (
    <div id="body">
      <ReactCardSlider slides={data}/>
  </div>
  );
}

/*
 <BaseTemplate
      leftNav={
        <>
          {data.map((item, index) => (
            <li key={index}>
              <Link href={item.link} legacyBehavior>
                <a
                  onClick={() => setActiveLink(item.link)}
                  className={`border-none text-gray-700 hover:text-gray-900 ${
                    activeLink === item.link ? 'underline' : ''
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>


*/