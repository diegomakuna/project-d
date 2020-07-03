import React, { Component } from 'react';
import "./lab.scss";
import { TimelineMax as Timeline, Power1, Power4,Back } from "gsap";

class Lab extends Component {

    _timeline = null;
    componentDidMount() {
       
        // this._InitAnimation()
       // this._animationText()
     }
 
     _animationText = () => {
         this._timeline = new Timeline({ paused: false });
         let introText = document.querySelector(".container-section");
        
        
         let t1 = 0.40
         let t2 = 0.60
       
             this._timeline.from(introText, t1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn, clearProps:"all" }, 0.5)
             this._timeline.from(introText, t2+= 0.10, {  y: 50, delay:0, ease: Power4.easeInOut, clearProps:"all" },0.5)
          
         
       }

    render(){
        
        return(
            <div className="section-lab">
                <div className="sidebar" >
                    <ul>
                        <li><a href="">webScrapping</a></li>
                        <li><a href="">webScrapping</a></li>
                        <li><a href="">webScrapping</a></li>
                     </ul>
                </div>
                <div className="container-section">
                    <div className="lab-detail">
                    <h2>Titulo da pagina</h2>
                    <p>Robo feito em C#  que captura os dados de um site atraves o selenium com chrome web drive </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <img src={require('../../assests/image/IronMan.jpg')} />
                    <p>Robo feito em C#  que captura os dados de um site atraves o selenium com chrome web drive </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default Lab