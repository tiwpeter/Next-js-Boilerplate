import React, { useEffect, useState } from 'react';
import './css/navtick.css';
import './warper/styls.css';

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const moveBoxes = () => {
    const stickyTop = document.getElementById('sticky-top');
    if (stickyTop) {
      stickyTop.style.position = 'fixed';
      stickyTop.style.top = '-25px';
      stickyTop.style.zIndex = '10'; // Use camel case for zIndex
    } else {
      console.error("Element with id 'sticky-top' not found.");
    }
  };
  
  const resetBoxes = () => {
    const stickyTop = document.getElementById('sticky-top');
    
    // Check if stickyTop is not null before resetting styles
    if (stickyTop) {
      stickyTop.style.position = '';
      stickyTop.style.top = '';
      stickyTop.style.zIndex = '';
    } else {
      console.error("Element with id 'sticky-top' not found.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (isScrolled) {
      moveBoxes();
    } else {
      resetBoxes();
    }
  }, [isScrolled]);

  return (
    <div className="sticky-top" id="sticky-top">
      <div className="wrappper">
        <div>
        <i id="left" className="fa-solid fa-angle-left"></i> 
        
        </div>
        <ul className="carousel">
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
          <li className="card">
            <div className="img">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt=""
                draggable="false"
              />
            </div>
            <span>onlsaini</span>
            <hr style={{ border: 'none', borderBottom: '1px solid #ccc', marginTop: '5px' }} />
          </li>
        </ul>
        <i id="right" className="fa-solid fa-angle-right"></i> 
      </div>
    </div>
  );
};

export default StickyNav;
