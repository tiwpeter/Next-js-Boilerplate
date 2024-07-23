import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './css/hover.css';
import './css/teepuk.css';
import './css/dropmenu.css';


const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the "open-menu" class on subMenu
  const togglemenu = () => {
    const subMenu = document.getElementById("subMenu");
    if (subMenu) {
      subMenu.classList.toggle("open-menu");
    }
  };

  const moveBoxes = () => {
    const teepuk = document.getElementById('teepuk');
    if (teepuk) {
      teepuk.style.top = '1000px'; // Example style change
    } else {
      console.error("Element with id 'teepuk' not found.");
    }
  };

  const resetBoxes = () => {
    const teepuk = document.getElementById('teepuk');
    if (teepuk) {
      teepuk.style.top = ''; // Reset style
    } else {
      console.error("Element with id 'teepuk' not found.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      moveBoxes();
    } else {
      resetBoxes();
    }
  }, [isScrolled]);

  return (
    <nav className="h-20 flex items-center justify-between" style={{ padding: '10px 15%' }}>
      {/* Scroll */}
      <div className="w-[503px]">
        <Image
          src="/icon/PantipLogo.png"
          alt="Pantip Logo"
          width={100}
          height={52}
          className="logo"
        />
      </div>
      <div className="flex items-center justify-center w-full h-12">
        <div className="teepuk flex gap-4" id="teepuk">
          <div className="flex items-center justify-center w-16 h-11 gap-2.5">
            <img 
              src="https://pantip.com/static/images/pantip_icon/icon-add_post.png" 
              alt="" 
              style={{ 
                width: '24px', 
                height: '24px', 
                filter: 'brightness(0) saturate(100%) invert(0%) sepia(2%) saturate(7454%) hue-rotate(60deg) brightness(109%) contrast(95%)' 
              }} 
            />
            <span className="hover-color-change">ตั้งกระทู้</span>
          </div>
          <div className="flex items-center justify-center w-30 h-11 gap-2.5">
            <img 
              src="https://pantip.com/static/images/pantip_icon/ic-pt_communities-outline-512px.png" 
              alt="" 
              style={{ 
                width: '24px', 
                height: '24px', 
                filter: 'brightness(0) saturate(100%) invert(0%) sepia(2%) saturate(7454%) hue-rotate(60deg) brightness(109%) contrast(95%)' 
              }} 
            />
            <span>คอมมูนิตี้</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-[503px]">
        <div className="flex items-center justify-center w-38 h-10">
          ให้เช่าที่พักกับ Airbnb
        </div>
        <div className="flex items-center justify-center w-10 h-10">
          <div>
            <img 
              src="/icon/world.png" 
              alt="" 
              className="world-icon" 
              style={{ width: 16, height: 16 }} 
            />
          </div>
        </div>
        <div>
          <img 
            src="/icon/profile-user.png" 
            className="user-pic" 
            onClick={togglemenu} // Attach togglemenu function to onClick event
            alt="" 
          />
        </div>
      </div>
      <div className="sub-menu-wrap " id="subMenu">
        <div className="sub-menu">
          <div className="user-info">
            <h2>James Ald</h2>
          </div>
          <hr />
          <a href="#" className="sub-menulink">
            <p>Logout</p>
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
