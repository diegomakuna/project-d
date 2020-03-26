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
                   <h2>Contato </h2>
                   <p>vamos bater um papo sobre tecnologia?</p>
                   <ul>
                       <li>
                           <a href="mailto:diegomakuna@gmail.com">
                             <span><FontAwesomeIcon icon={faEnvelope} className="icon icon-mail" /></span>
                            <span>diegomakuna@gmail.com</span>
                            </a>
                       </li>
                       <li>
                       <a href="skype:diegomakuna?chat">
                             <span><FontAwesomeIcon icon={faSkype} className="icon icon-skype" /></span>
                           <span>diegomakuna</span>
                           </a>
                       </li>
                       <li>
                       <a href="#">
                             <span><FontAwesomeIcon icon={faWhatsapp} className="icon icon-whatssap" /></span>
                           <span>55 (11) 97197-3600</span>
                           </a>
                       </li>
                       
                   </ul>
            </div>
            </div>
        )
    }
}
export default Contact