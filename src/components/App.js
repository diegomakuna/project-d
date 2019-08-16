import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import SideBar from './Sidebar/SideBar';
import HomePage from './Home/Home';
import "./app.scss";

const App = () => {
  return (
    <Router>
  
      <SideBar />
      <div className="d28-wrapper">
      <Route name="home" exact path="/" component={HomePage} />
      </div>
   
  </Router>
  );
};

export default App;