"use client"
import React from 'react';
import Katoo from './katoodetail';

const KatooPage = () => {
  return (
  <div className="copmain" style={{width: "1078px"}}>
    <div className="mt-3" style={{ background: '#7f99ff', display: 'flex', minHeight: '43px', padding: '12px 16px', position: 'relative', whiteSpace: 'normal', width: '1078px' }}>
      <h3>Katoo</h3>
    </div>
    <Katoo/>
  </div>
  )
};

export default KatooPage;
