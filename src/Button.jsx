import React from 'react';
import './index.css';

const Button = ({ color = 'blue', onClick, children }) => {
  return (
    <button className={`button button--${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
