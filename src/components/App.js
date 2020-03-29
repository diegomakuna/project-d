import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timeline/timelines'
import { browserHistory } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/footer';
import HomePage from './Home/Home';
import AboutPage from './About/About';
import SkillsPage from './Skills/Skills';
import LabPage from './Lab/Lab';
import ContactPage from './Contact/Contact';

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
 
  }


 
  _changeFonts = (path) => {
    if(path === "/contact"){ return "blackColor" }
   
      return ""
  }
  render() {
    return (
      <BrowserRouter>


        <Route render={({ location }) => {

          const { pathname, key } = location

          console.log("Chamou Render");

          return (
            <>
              <Header className={this._changeFonts(pathname)} />


              <div className="wrapper">
                <div className="container">
                  <TransitionGroup component={null}>
                    <Transition
                      key={key}
                      appear={true}
                      onEnter={(node, appears) => play(pathname, node, appears)}
                      onExit={(node, appears) => exit(node, appears)}
                      timeout={{ enter: 750, exit: 100 }}>
                      <Switch location={location}>
                        <Route name="home" exact path="/" component={HomePage} />
                        <Route name="about" path="/sobre" component={AboutPage} />
                        <Route name="skills" path="/skills" component={SkillsPage} />
                        {/* <Route name="lab" path="/lab" component={LabPage} /> */}
                        <Route name="Contact" path="/contact" component={() => <ContactPage className={this._changeFonts(pathname)}/> } /> */}
                      </Switch>
                    </Transition>
                  </TransitionGroup>
                </div>
              </div>

              <Footer className={this._changeFonts(pathname)} />
            </>
          )
        }}
        />

      </BrowserRouter>
    );
  };
};

export default App;