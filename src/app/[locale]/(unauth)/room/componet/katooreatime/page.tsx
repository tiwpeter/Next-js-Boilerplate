"use client"
import React from 'react';
import TagpanTag from './pagetag/page';
import './pagetag/css/tag.css'
import './pagetag/css/bottom.css'
import './pagetag/css/boxtestcolor2.css'
import './pagetag/css/boxtestcolor.css'
import './pagetag/css/te.css'
import KatooCurent from './pagePick/page';


const Katooreatime = () => {
  return (
    <section className="flex">
      {/*<!--startmore--> */}
        <div style={{width: "713px;"}}>
        <div className="mt-5" style={{backgroundColor: "#7f99ff", display: "flex", minHeight: "43px", padding: "12px 16px", position: "relative", whiteSpace: "normal"}}>
          <h3>      กระทู้ล่าสุด         </h3>
      </div>
        <KatooCurent/>
        </div>
  
       {/*<!--folder-> */} 
       {/* Tag Section */}
       <div className="foder" style={{ marginLeft: '40px' }}>
          <div style={{ marginTop: "20px" }}>
            <div className="tagbox">
              <div className="nav1">
                <ul className="ww">
                  <li className="jow1">แท็กฮิต</li>
                  {/* สามารถเพิ่ม li อื่น ๆ ตามต้องการได้ */}
                </ul>
              </div>
            </div>
            <TagpanTag />
          </div>
        </div>
      </section>
  )
};

export default Katooreatime;