import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul class="footer-links">
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
        <div class="powredby">
            <span class="text">powred <br/>by</span>
            <span class="year">2019</span>
        </div>
      </div>
    );
  }
}
export default Footer;
