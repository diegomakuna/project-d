import React, { Component } from 'react';
import { TimelineMax as Timeline, Power1, Power4,Back } from "gsap";
import "./home.scss";
class Home extends Component {
     _timeline = null;
    constructor(props) {
        super(props);
      
    }

    componentDidMount() {
        
        this._InitAnimation()
    }

    _InitAnimation = () => {
        this._timeline = new Timeline({ paused: false });
        const introText = document.querySelector(".intro-text");
        const words = introText?.childNodes;
        this._timeline.from(introText, 0.45, { autoAlpha: 0,  ease: Power1.easeOut, clearProps:"all" });

        let t1 = 0.40
        let t2 = 0.60
        if(words != null){
        for (const item of words) {
            this._timeline.from(item, t1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn, clearProps:"all" }, 0.9)
          
            this._timeline.from(item, t2+= 0.10, {  y: 90, delay:0, ease: Power4.easeInOut, clearProps:"all" },0.9)
         
        }
      }
    }

    render() {
        return (
            <div className="section-home">
                <div className="home-container">
                    <div className="imagebox img-0 slide-in-elliptic-left-fwd"></div>
                    <div className="imagebox img-1 slide-in-elliptic-left-fwd"></div>
                    <div className="imagebox img-2 slide-in-elliptic-left-fwd "></div>
                    <div className="intro-text">
                        <div className="text-0">
                            WITH GREAT
                        </div>
                        <div className="text-1">
                            POWER,
                        </div>
                        <div className="text-2">
                            COME GREAT
                        </div>
                        <div className="text-3">
                            RESPONSABILITY
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home