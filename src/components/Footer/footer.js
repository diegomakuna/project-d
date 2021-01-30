import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className={`footer ${this.props.className}`}>
        <ul className="footer-links">
          <li>
            <a href="https://www.linkedin.com/in/diegoaraujo8" target="black">
              <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
          </li>
          <li>
            <a href="https://github.com/diegomakuna" target="black">
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          </li>
        </ul>
        <div className="powredby">
            <span className="text">powered by<br/>Diego</span>
            <span className="year">2020</span>
        </div>
      </div>
    );
  }
}
export default Footer;
