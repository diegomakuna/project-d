import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import SideBar from './Sidebar/SideBar';
import HomePage from './Home/Home';
import AboutPage from './About/About';
import "./app.scss";

const App = () => {
  return (
    <Router>
  
      <SideBar />
      <div className="d28-wrapper left ">
        <div className="container">
      <Switch> 
      <Route name="home" exact path="/" component={HomePage} />
      <Route name="about" path="/sobre" component={AboutPage} />
      </Switch>
      </div>
      </div>
   
  </Router>
  );
};

export default App;