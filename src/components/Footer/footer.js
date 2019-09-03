import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import "./footer.scss";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div class="footer-links">
                  
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faGithubAlt} />

                </div>
              
            </div>
        )
    }

}
export default Footer;  