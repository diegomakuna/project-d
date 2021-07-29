import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timeline/timelines'
import { browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import Loader from 'react-loader-spinner';

import Header from './Header/Header';
import Footer from './Footer/footer';
import HomePage from './Home/Home';
import AboutPage from './About/About';
import SkillsPage from './Skills/Skills';

import ContactPage from './Contact/Contact';

import Particles from 'react-particles-js';

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }


  componentDidMount() {
    
    this.initializeReactGA();
    var _this = this;
    setTimeout(function(){
      _this.setState({loading : false})
    },1400)
    
  }



  _changeFonts = (path) => {

    ReactGA.pageview(path);
    if (path === "/contato") { return "blackColor" }

    return ""
  }



  initializeReactGA = () => {
    ReactGA.initialize('UA-163209479-1');

  }

  render() {
    return (

      <BrowserRouter>


        <Route render={({ location }) => {

          const { pathname, key } = location

      
          return (
            <>  
       
       <Loader visible={this.state.loading} type="TailSpin" className="loading" color="#fc009d" secondaryColor="#2641fe" height={80} width={80} />
         
         <div className="layer-particle">
              
                <Particles
                  params={{
                    "particles": {
                      "number": {
                        "value": 190,
                        "density": {
                          "enable": true,
                          "value_area": 2500
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },

                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.5,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3.0,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#002dff",
                        "opacity": .3,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": true,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "bubble"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 500,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 250,
                          "size": 10,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 100,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }} />
              </div>
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
                        <Route name="skills" path="/habilidades" component={SkillsPage} />
                        {/* <Route name="lab" path="/lab" component={LabPage} /> */}
                        <Route name="Contact" path="/contato" component={() => <ContactPage className={this._changeFonts(pathname)} />} />
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