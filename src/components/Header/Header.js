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
            </div>
        )
    }

}
export default Header;