import React, { Component } from "react";
import { Link } from "react-router-dom";
import perfil from '../../assests/image/perfil.jpg';
import "./sidebar.scss";
class SideBar extends Component {
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
          <li>
            <a rel="home" href="#/" className="home-link ">
              <i className="fa fa-home" aria-hidden="true" />Home
            </a>
          </li>
          <li>
           
            <a rel="sobre" href="#/sobre" className="">
              <i className="fa fa-user-secret" aria-hidden="true" />Sobre
            </a>
          </li>
          <li>
            <a rel="skills" href="#/skills" className="">
              <i className="fa fa-bolt" aria-hidden="true" />Skills
            </a>
          </li>
          <li>
            <a rel="lab" href="#/lab" className="">
              <i className="fa fa-flask" aria-hidden="true" />Lab
            </a>
          </li>
          <li>
            <a rel="contato" href="#/contato" className="">
              <i className="fa fa-envelope-o" aria-hidden="true" />Contato
            </a> 
          </li>
        </nav>
      </div>
    );
  }
}
export default SideBar;
