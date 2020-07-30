import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, LINKS } from './NavMenu';

interface Props {}

export const NavMenuMobile = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  let classIcon = ['NavMenuMobile__icon'];
  if (showMenu) {
    classIcon = ['NavMenuMobile__icon', 'NavMenuMobile__icon--open'];
  }

  let classRadialMenu = ['NavMenuMobile__background'];
  if (showMenu) {
    classRadialMenu = ['NavMenuMobile__background', 'NavMenuMobile__background--open'];
  }

  let classTextMenu = ['NavMenuMobile__nav'];
  if (showMenu) {
    classTextMenu = ['NavMenuMobile__nav', 'NavMenuMobile__nav--open'];
  }

  let linkOutput = LINKS.map(
    (link: Link): JSX.Element => {
      return (
        <li key={link.path}>
          <NavLink
            className="NavMenuMobile__link"
            activeClassName="NavMenuMobile__link--active"
            to={link.path}
            onClick={() => setShowMenu(!showMenu)}
          >
            {link.label}
          </NavLink>
        </li>
      );
    }
  );

  return (
    <div className="NavMenuMobile">
      <div className="NavMenuMobile__button" onClick={() => setShowMenu(!showMenu)}>
        <span className={classIcon.join(' ')}></span>
      </div>
      <div className={classRadialMenu.join(' ')} />
      <nav className={classTextMenu.join(' ')}>
        <ul className="NavMenuMobile__list">{linkOutput}</ul>
      </nav>
    </div>
  );
};
