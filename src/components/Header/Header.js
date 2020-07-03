import React, { Component } from "react";
import "./header.scss";
import { NavLink, BrowserRouter as Router, } from 'react-router-dom'
import { withRouter } from "react-router";
import { TimelineMax as Timeline, Power1, Power4, Back } from "gsap";
class Header extends Component {
    _timeline = null;
    constructor(props) {
        super(props);
        this.state = {
            menuToggle: false
        };
    }

    componentDidMount() {

        this._timeline = new Timeline({ paused: false });

    }

    _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
    }

    getNavLinkClass = (path) => {

        return this.props.location.pathname === path ? 'active' : '';
    }
    _mouseOver = (evt) => {


        // const line = evt.currentTarget.querySelector(".line")

        //   this._timeline.to(line, 0.0, { width: '100%', height:'2px' }, { x: "-30px", ease: Power4.ease }, 0)
        // .to(teamLine, 2.5, { x: "100px", opacity: 1, ease: Power2.ease}, 0)
    }

    _mouseLeave = (evt) => {
        //  const line = evt.currentTarget.querySelector(".line")

        //  this._timeline.to(line, 0.1, { width: 0, height:'2px' , ease: Power4.ease })
    }

    _menuToggle = (value) => {
        this.setState({ menuToggle: value });
    }

    render() {

        return (
            <div className={`header ${this.props.className}`}>
                <div className="logo">
                    <h1 className="text-center">Diego Araujo</h1>
                    <span className="subtitle"> Web Developer </span>
                </div>
                <div className={`nav ${this.state.menuToggle ? 'is-active' : ''}`}>
                    <div className={`hamburger hamburger--squeeze js-hamburger ${this.state.menuToggle ? 'is-active' : ''}`} onClick={() => this._menuToggle(!this.state.menuToggle)} >
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                    <div className="nav-container">
                        <ul>
                            <li className={this.getNavLinkClass("/")} onMouseEnter={this._mouseOver} onMouseLeave={this._mouseLeave}>
                                <NavLink exact rel="home" to="/" onClick={() => this._menuToggle(false)}  >HOME</NavLink>
                                <div className="line"></div>
                            </li>
                            <li className={this.getNavLinkClass("/sobre")}>
                                <NavLink rel="sobre" to="/sobre" onClick={() => this._menuToggle(false)}>SOBRE</NavLink>
                                <div className="line"></div>
                            </li>
                            <li className={this.getNavLinkClass("/habilidades")}>
                                <NavLink rel="habilidades" to="/habilidades" onClick={() => this._menuToggle(false)} >HABILIDADES</NavLink>
                                <div className="line"></div>
                            </li>
                            <li className={this.getNavLinkClass("/labs")}>
                                <NavLink rel="labs" to="/labs" onClick={() => this._menuToggle(false)}>LABS</NavLink>
                                <div className="line"></div>
                                </li>
                            <li className={this.getNavLinkClass("/contato")}>
                                <NavLink rel="contato" to="/contato" onClick={() => this._menuToggle(false)}>CONTATO</NavLink>
                                <div className="line"></div>
                            </li>
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