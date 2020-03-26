import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faSkype  } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import "./contact.scss";

class Contact extends Component {
    render(){
        
        return(
            <div className="section-contact">
                <div className="layer-transparent"></div>
                <div className="container-section">
                   <h2>Contact </h2>
                   <p>vamos bater um papo sobre tecnologia?</p>
                   <ul>
                       <li>
                             <span><FontAwesomeIcon icon={faEnvelope} className="icon icon-mail" /></span>
                            <span>diegomakuna@gmail.com</span>
                       </li>
                       <li>
                             <span><FontAwesomeIcon icon={faSkype} className="icon icon-skype" /></span>
                           <span>diegomakuna</span>
                       </li>
                       <li>
                             <span><FontAwesomeIcon icon={faWhatsapp} className="icon icon-whatssap" /></span>
                           <span>55 (11) 97197-3600</span>
                       </li>
                       
                   </ul>
            </div>
            </div>
        )
    }
}
export default Contact