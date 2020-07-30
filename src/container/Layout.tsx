import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NavMenu } from '../components/NavMenu';
import { NavMenuMobile } from '../components/NavMenuMobile';
import { PortfolioList } from './PortfolioList';
import { About } from './About';
import { Contact } from './Contact';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavMenuMobile />
      <div className="Layout__">
        <Header />
        <NavMenu />
        {children}
      </div>
      <div className=""></div>
    </>
  );
};

export default Layout;
