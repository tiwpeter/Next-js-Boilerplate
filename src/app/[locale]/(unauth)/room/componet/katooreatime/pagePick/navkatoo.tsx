import React, { useState } from 'react';
import './font.css'


const Navkatoo = () => {
  return (
    <section>
      <div className="ova flex items-center justify-between h-9">
        <div className="flex space-x-4"> {/* space-x-4 เพิ่มระยะห่างระหว่าง item */}
          <a className='fontKatoo'>กระทู้ทั้งหมด</a>
          <a className='fontKatoo'>คลังกระทู้โปรด</a>
          <a className='fontKatoo'>ถามตอบ</a>
          <a className='fontKatoo'>พูดคุย</a>
          <a className='fontKatoo'>รีวิว</a>
          <a className='fontKatoo'>โพล</a>
          <a className='fontKatoo'>ข่าว</a>
          <a className='fontKatoo'>ซื้อขาย</a>
        </div>

        <div className='grid'>
          grid
        </div>
      </div>
    </section>
  );
};

export default Navkatoo;