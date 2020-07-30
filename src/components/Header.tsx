import React from 'react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <Logo />
      </div>
      <div className="Header__text">
        <p>HTML, CSS, Javascript, React</p>
      </div>
      <div className="Header__link"></div>
      {/* <a className="Header__link" href="https://github.com/danchen4">
        github.com/danchen4
      </a> */}
    </div>
  );
};
