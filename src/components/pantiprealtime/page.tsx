"use client"
import React from 'react';
import Pagepantip from './pagepantip/page';

const PantipColum = () => {
  return (
  <div className="copmain" style={{width: "1078px"}}>
    <div className="mt-3" style={{ background: '#7f99ff', display: 'flex', minHeight: '43px', padding: '12px 16px', position: 'relative', whiteSpace: 'normal', width: '1078px' }}>
      <h3>Pantip Realtime</h3>
    </div>
    <Pagepantip/>
  </div>
  )
};

export default PantipColum;
