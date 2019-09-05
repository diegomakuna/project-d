import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-links">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          </li>
        </ul>
        <div className="powredby">
            <span className="text">powred by<br/>Diego</span>
            <span className="year">2019</span>
        </div>
      </div>
    );
  }
}
export default Footer;
