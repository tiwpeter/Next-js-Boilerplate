import React from 'react';
import './mor.css'

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-button">
      เพิ่มเติม
    </button>
  );
};

export default LoadMoreButton;
