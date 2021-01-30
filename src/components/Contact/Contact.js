import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faSkype, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { TimelineMax as Timeline, Power1, Power4,Back } from "gsap";
import "./contact.scss";

class Contact extends Component {

    _timeline = null;
    componentDidMount() {
        // use the node ref to create the animation
        
        this._InitAnimation();
    }
    _InitAnimation = () => {
        this._timeline = new Timeline({ paused: false });
        const elemtLeft = document.querySelector('.layer-transparent')
        const elemtRight= document.querySelector('.bg-image')
        const elemtDescription = document.querySelector('.contact-container h2')
        const timelineList = document.querySelector('.contact-container ul').childNodes;
        

        this._timeline.from(elemtLeft, 1.0, {  width: 0, delay:0, ease: "back.out(1.0)", clearProps:"all" },0.2)
        .from(elemtRight, 0.9, {  autoAlpha: 0, ease: "expo.inOut", clearProps:"all"  }, 1.0)
        .from(elemtDescription, 0.70, {y: 40,  autoAlpha: 0,  ease: Power1.easeOut }, 1.0)
        

        let t1 = 0.70
        let t2 = 0.60
        if(timelineList != null){
        for (const item of timelineList) {
            this._timeline.from(item, t1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn }, 1.2)
          
            this._timeline.from(item, t2+= 0.10, {  y: 90, delay:0, ease: Power4.easeInOut },1.2)
         
        }
      }
    }
    render(){
        
        return(
            <div className={`section-contact ${this.props.className}`}>
                <div className="layer-transparent"></div>
                <div className="container-section">
                <div className="left-container">
                    <div className="bg-image"></div>
                </div>
                    <div className="right-container">
                    <div className="contact-container">
                   <h2>Contato 
                   <span>vamos falar sobre tecnologia ?</span></h2>
                   <ul>
                       
                       <li>
                       <a href="https://www.linkedin.com/in/diegoaraujo8" target="blanck">
                            <span className="icon"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</span>
                            <span>https://www.linkedin.com/in/diegoaraujo8/</span>
                           </a>
                       </li>

                       <li>
                           <a href="mailto:diegomakuna@gmail.com">
                             <span className="icon"><FontAwesomeIcon icon={faEnvelope} className="icon icon-mail" /> Email</span>
                            <span>diegomakuna@gmail.com</span>
                            </a>
                       </li>
                       <li>
                       <a href="skype:diegomakuna?chat">
                             <span className="icon"><FontAwesomeIcon icon={faSkype} className="icon icon-skype" /> Skype</span>
                           <span>diegomakuna</span>
                           </a>
                       </li>
                     
                       
                   </ul>
            </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Contact