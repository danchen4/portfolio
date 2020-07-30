import React from 'react';
import github from '../assets/github.png';
import email from '../assets/email.svg';
import document from '../assets/0217-document.svg';
import linkedin from '../assets/linkedin-3.svg';
import resume from '../assets/danchenresume.pdf';

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact__box">
        <h3 className="heading-tertiary u-mbot-md">Contact Me</h3>
        <div className="Contact__box-row">
          <img className="Contact__icon" src={email} alt="email logo" />
          <a
            className="Contact__link"
            href="mailto:danchen4@gmail.com?"
            target="_blank"
            rel="noopener noreferrer"
          >
            danchen4@gmail.com
          </a>
        </div>
        {/* <div className="Contact__box-row">
          <img className="Contact__icon-linkedin" src={linkedin} alt="linkedin logo" />
          <a
            className="Contact__link"
            href="https://www.linkedin.com/in/danchen4"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin/danchen4
          </a>
        </div> */}
        <div className="Contact__box-row">
          <img className="Contact__icon" src={github} alt="github logo" />
          <a
            className="Contact__link"
            href="https://github.com/danchen4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/danchen4
          </a>
        </div>
      </div>
      {/* <div className="Footer__logo">
        <Logo />
      </div> */}
    </div>
  );
};
