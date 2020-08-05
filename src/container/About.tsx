import React from 'react';
import profile from '../assets/linkedin.png';
import resume from '../assets/DanChenResume.pdf';
import document from '../assets/0217-document.svg';

import { Document } from 'react-pdf';
import { ABOUT_ME } from '../constants/about';

interface Props {}

export const About = (props: Props) => {
  return (
    <div className="About">
      <div className="About__story">
        <div className="About__shape">
          <img className="About__img" src={profile} alt="profile" />
        </div>
        <div className="About__text">
          <h3 className="heading-tertiary u-mbot-xs">About Me</h3>
          <p>{ABOUT_ME}</p>
        </div>
        <div className="About__box-row">
          <img className="About__icon" src={document} alt="github logo" />
          <a className="About__link" href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
