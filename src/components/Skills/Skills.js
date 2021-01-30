import React, { Component } from 'react';
import { TimelineMax as Timeline, Power1, Power4,Back } from "gsap";
import "./skills.scss";

class Skills extends Component {
    _timeline = null;
    constructor(props) {
        super(props);
      
    }

    componentDidMount() {
        
        this._InitAnimation()
    }

    _InitAnimation = () => {
        this._timeline = new Timeline({ paused: false });
        const titles = document.querySelectorAll("h2 span");
        const motionTitles = document.querySelectorAll("h2 .motion-title");
        const backlist =  document.querySelectorAll(".back-container li");
        const frontlist =  document.querySelectorAll(".front-container li");
        
        
        // back front animation
        this._timeline.set(titles,{autoAlpha: 0})
        .from(motionTitles, .5, {  height: 0, bottom:0, delay:0, ease: Power4.easeIn}, 0.5)
        .set(titles,{autoAlpha: 1.0})
        .to(motionTitles, .5, {  height: 0, top:0, delay:0, ease: Power4.easeOut},1.1)
        // this._timeline.from(front, 1.0, {  width: 0, delay:0, ease: "back.out(1.0)", clearProps:"all" },0.2)
    //     const words = introText?.childNodes;
    //     this._timeline.from(introText, 0.45, { autoAlpha: 0,  ease: Power1.easeOut, clearProps:"all" });

         let b1 = 0.40
         let b2 = 0.60
        if(backlist != null){
        for (const item of backlist) {
             this._timeline.from(item, b1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn, clearProps:"all" }, 1.3)
          
             this._timeline.from(item, b2+= 0.10, {  x: 60, delay:0, ease: "back.out(5)", clearProps:"all" },1.3)
         
        }
       }

         let f1 = 0.40
         let f2 = 0.60
        if(frontlist != null){
        for (const item of frontlist) {
             this._timeline.from(item, f1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn, clearProps:"all" }, 1.3)
          
             this._timeline.from(item, f2+= 0.10, {  x: -60, delay:0, ease: "back.out(5)", clearProps:"all" },1.3)
         
        }
       }

    }
    render(){
        
        return(
            <div className="section-skills">
                <div className="container-section">
                <div className="back-container">
                   
                    <h2>
                    <div className="motion-title"></div>
                        <span>BACK</span>
                        </h2>
                    <ul>
                        <li className="m1">
                            <h4>DATABASE</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m2">
                            <h4>SQL</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m3">
                            <h4>C#</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m4">
                            <h4>ASP.NET CORE</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m5">
                            <h4>NODE</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                    </ul>
                  
                </div>
                <div className="front-container">
                  
                <h2>
                    <div className="motion-title"></div>
                    <span>FRONT</span>
                    </h2>
                <ul>
                        <li className="m1">
                            <h4>HTML</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m2">
                            <h4>CSS</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m3">
                            <h4>JAVASCRIPT</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m4">
                            <h4>React</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                        <li className="m5">
                            <h4>VUE</h4>
                            <div className="percent">
                                <div className="parcent-count"></div>
                                <div className="parcent-background"></div>
                            </div>
                        </li>
                    </ul>
           
                </div>
            </div>
            </div>
        )
    }
}
export default Skills