import React from 'react';
import './index.css';

const Box = ({ size = 'medium', children }) => {
  const sizeClass = `box--${size}`;

  return (
    <div className={`box ${sizeClass}`}>
      {children}
    </div>
  );
};

export default Box;
