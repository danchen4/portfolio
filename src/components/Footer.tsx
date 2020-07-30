import React from 'react';
import github from '../assets/github.png';
import email from '../assets/email.svg';
// import { Logo } from './Logo';

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__box">
        <div className="Footer__box-row">
          <img className="Footer__icon" src={github} alt="github logo" />
          <a
            className="Footer__link"
            href="https://github.com/danchen4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/danchen4
          </a>
        </div>
        <div className="Footer__box-row">
          <img className="Footer__icon" src={email} alt="email logo" />
          <a
            className="Footer__link"
            href="mailto:danchen4@gmail.com?"
            target="_blank"
            rel="noopener noreferrer"
          >
            danchen4@gmail.com
          </a>
        </div>
      </div>
      {/* <div className="Footer__logo">
        <Logo />
      </div> */}
    </div>
  );
};
