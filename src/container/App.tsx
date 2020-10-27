import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../sass/main.scss';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NavMenu } from '../components/NavMenu';
import { NavMenuMobile } from '../components/NavMenuMobile';
import { PortfolioList } from './PortfolioList';
import { About } from './About';
import { Contact } from './Contact';
import { Designs } from './Designs';
import fullResume from '../assets/DanielChenResume.pdf';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <NavMenu />
        <NavMenuMobile />
        <Switch>
          <Route exact path="/portfolio" render={() => <PortfolioList />} />
          <Route exact path="/designs" render={() => <Designs />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/resume-full" render={() => <a href={fullResume}>Other Resume</a>} />
          {/* <Route exact path="/" render={() => <PortfolioList />} /> */}
          <Redirect from="*" to="/portfolio" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
