import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrowIcon = ({ className, border, borderRadius }) => (
  <FontAwesomeIcon
    icon={faAngleLeft}
    className={`fa-solid fa-angle-left ${className}`}
    style={{
      border: border ? '1px solid #000' : 'none',
      borderRadius: borderRadius ? '50%' : '0',
    }}
  />
);

export default LeftArrowIcon;