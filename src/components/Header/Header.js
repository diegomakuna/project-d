import React, { Component } from "react";
import "./header.scss";
import { NavLink, BrowserRouter as Router, }  from 'react-router-dom'
import { withRouter } from "react-router";
class Header extends Component {
    getNavLinkClass = (path) => {
   
        return this.props.location.pathname === path ? 'active' : '';
      }
    render() {
        return (
            <div className="header">
                    <div className="logo">
                <h1 className="text-center">Diego Araujo</h1>
               <span className="subtitle"> Web Developer </span>
               </div>
               <div className="nav">
                    <div className="nav-container">
                    <ul>
                        <li className={this.getNavLinkClass("/")}>
                            <NavLink exact rel="home" to="/"  >HOME</NavLink>
                        </li>
                        <li className={this.getNavLinkClass("/sobre")}>
                        <NavLink   rel="sobre" to="/sobre">SOBRE</NavLink></li>
                        <li className={this.getNavLinkClass("/skills")}>
                            <NavLink   rel="skills" to="/skills" >HABILIDADES</NavLink></li>
                        {/* <li className={this.getNavLinkClass("/labs")}>
                            <NavLink   rel="labs" to="/labs">LABS</NavLink></li> */}
                        <li className={this.getNavLinkClass("/contact")}>
                            <NavLink   rel="contact" to="/contact">CONTATO</NavLink></li>
                    </ul>
                    </div>
               </div>
               <div className="header-right">

               </div>
              
            </div>
        )
    }

}
Header = withRouter(Header)
export default Header;