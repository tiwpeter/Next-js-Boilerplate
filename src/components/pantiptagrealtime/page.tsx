"use client"
import React from 'react';
import TagpanTag from './pagetag/page';
import './pagetag/css/tag.css'
import './pagetag/css/bottom.css'
import './pagetag/css/boxtestcolor2.css'
import './pagetag/css/boxtestcolor.css'
import './pagetag/css/te.css'
import PageTagRealtime from './pageTagRealtime/page';

const PantipTagreal = () => {
  return (
  <section className="flex">
    {/*<!--startmore--> */}
      <div style={{width: "713px;"}}>
      <div className="mt-5" style={{backgroundColor: "#7f99ff", display: "flex", minHeight: "43px", padding: "12px 16px", position: "relative", whiteSpace: "normal"}}>
        <h3>PantipTagRealTime</h3>
    </div>
      <PageTagRealtime/>
      </div>

     {/*<!--folder-> */} 
     {/* Tag Section */}
     
    </section>
  )
};

export default PantipTagreal;
/**<div className="mt-3" style={{ background: '#7f99ff', display: 'flex', minHeight: '43px', padding: '12px 16px', position: 'relative', whiteSpace: 'normal', width: '1102px' }}>
      <h3>Pantip Realtime</h3>
    </div> */