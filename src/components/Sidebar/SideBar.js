import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import perfil from '../../assets/image/perfil.jpg';
import "./sidebar.scss";
class SideBar extends Component {
  getNavLinkClass = (path) => {
   
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return (
      <div className="sidebar">
        <div className="perfil">
          <img src={perfil} alt="" />
          <h5>
            Diego Araujo
            <span> Developer</span>
          </h5>
        </div>
        <nav className="nav">
          <li className={this.getNavLinkClass("/")}>
            <NavLink exact   rel="home" to="/" activeClassName="active" >
              <i className="fa fa-home" />Home
            </NavLink>
          </li>
          <li className={this.getNavLinkClass("/sobre")}>
           
            <NavLink activeClassName="active"  rel="sobre" to="/sobre" className="">
              <i className="fa fa-user-secret" />Sobre
            </NavLink>
          </li>
          <li className={this.getNavLinkClass("/skills")}>
            <NavLink activeClassName="active" rel="skills" to="/skills" className="">
              <i className="fa fa-bolt" aria-hidden="true" />Skills
            </NavLink>
          </li>
          <li className={this.getNavLinkClass("/lab")}>
            <NavLink activeClassName="active" rel="lab" to="/lab" className="">
              <i className="fa fa-flask" aria-hidden="true" />Lab
            </NavLink>
          </li>
          <li className={this.getNavLinkClass("/contact")}>
            <NavLink activeClassName="active" rel="contact" to="/contact" className="">
              <i className="fa fa-envelope-o" aria-hidden="true" />Contact
            </NavLink>
          </li>
        </nav>
      </div>
    );
  }
}
SideBar = withRouter(SideBar)
export default SideBar;
