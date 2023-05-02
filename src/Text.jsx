import React from 'react';
import './index.css';

const Text = ({ size = 'medium', color, children }) => {
  const sizeClass = `text--${size}`;

  return (
    <span className={`text ${sizeClass}`} style={{ color }}>
      {children}
    </span>
  );
};

export default Text;
