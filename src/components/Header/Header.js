import React, { Component } from "react";
import "./header.scss";
class Header extends Component {
    render() {
        return (
            <div className="header">
                    <div class="logo">
                <h1 class="text-center">Diego Araujo</h1>
               <span className="subtitle"> Web Developer </span>
               </div>
               <div class="nav">
                    <div class="nav-container">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SKILLS</a></li>
                        <li><a href="#">LABS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    </div>
               </div>
               <div class="header-right">

               </div>
              
            </div>
        )
    }

}
export default Header;