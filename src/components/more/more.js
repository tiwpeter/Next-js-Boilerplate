import React from 'react';
import './mor.css';

const MoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-buttonF">
      ดูทั้งหมด
    </button>
  );
};

export default MoreButton;
