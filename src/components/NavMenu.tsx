import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export interface Link {
  id: number;
  path: string;
  label: string;
}

export const LINKS = [
  { id: 1, path: '/portfolio', label: 'Portfolio' },
  { id: 2, path: '/designs', label: 'Designs' },
  { id: 3, path: '/about', label: 'About' },
  { id: 4, path: '/contact', label: 'Contact' },
];

let lastMenuId = 1;

export const NavMenu = () => {
  const location = useLocation();

  // Capture the link.id after rendering and store in lastMenuId
  useEffect(() => {
    LINKS.forEach((link: Link): void => {
      if (location.pathname === link.path) {
        lastMenuId = link.id;
      }
    });
  });

  // Since useEffect will run after render, then lastMenuId will be from previous render
  let linkOutput = LINKS.map(
    (link: Link): JSX.Element => {
      return (
        <NavLink
          className="NavMenu__link"
          key={link.path}
          activeClassName="NavMenu__link--active"
          to={link.path}
        >
          {link.label}
          {/* {classNavBar} */}
          <CSSTransition
            in={location.pathname === link.path} //Only display if nav menu item matches current location
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={link.id > lastMenuId ? 'toRightBar' : 'toLeftBar'} // animation will change if moving right vs left along the menu
          >
            <span className="NavMenu__active-bar">&nbsp;</span>
          </CSSTransition>
        </NavLink>
      );
    }
  );

  return (
    <div className="NavMenu">
      <div className="NavMenu__nav">
        <div className="NavMenu__bar" />
        {linkOutput}
      </div>
    </div>
  );
};
