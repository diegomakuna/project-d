import React, { Component } from "react";
import { TimelineMax as Timeline, Power1, Power4,Back } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./about.scss";

class About extends Component {

    _timeline = null;
    componentDidMount() {
        // use the node ref to create the animation
        
        this._InitAnimation();
    }
    _InitAnimation = () => {
        this._timeline = new Timeline({ paused: false });
        const elemtLeft = document.querySelector('.about-left')
        const elemtRight= document.querySelector('.bg-image')
        const elemtDescription = document.querySelector('.description-container')
        const timelineList = document.querySelector('.timeline ul').childNodes;
        

        this._timeline.from(elemtLeft, 1.0, {  width: 0, delay:0, ease: "back.out(1.0)", clearProps:"all" },0.2)
        .from(elemtRight, 0.9, {  width: 0, ease: "expo.inOut", clearProps:"all"  }, 1.0)
        .from(elemtDescription, 0.70, { autoAlpha: 0,  ease: Power1.easeOut }, 1.0)
        //console.log(elemtLeft);

        let t1 = 0.70
        let t2 = 0.60
        if(timelineList != null){
        for (const item of timelineList) {
            this._timeline.from(item, t1 += 0.10 , { autoAlpha: 0,delay:0,  ease: Power1.easeIn }, 1.2)
          
            this._timeline.from(item, t2+= 0.10, {  y: 90, delay:0, ease: Power4.easeInOut },1.2)
         
        }
      }
    }

  render() {
    return (
      <div className="section-about">
        <div className="about-left">
          <div className="about-container">
            <div className="description-container">
              <div className="description-text">
                <div className="since-text">SINCE 1987</div>
                <h2>I’m lucky because my work is also one of my passions</h2>
                <p>
                  {" "}
                  Currently working as a creative front-end developer at Vdu Web
                  Agency, a small studio based in Turin, Italy. Sometimes I take
                  freelance work.
                </p>

                <p>
                  I specialize in Drupal front-end development but also like
                  trying out other technologies in order to become more
                  flexible.
                </p>

                <p>
                  I enjoy collaborating on interesting projects that I can be
                  proud of.
                </p>

                <p>
                  Another great passion of mine is surfing, not wind-surfing or
                  kite-surfing, just surfing, as in the movie Point Break, but
                  with smaller waves and no robberies.
                </p>
              </div>
            </div>
            <div className="timeline">
              <ul>
                <li>
                  <div className="job">
                    <span className="company">O3 DIGITAL</span>
                    <span className="office">front-and</span>
                    <span className="years">2006 - 2006 </span>
                  </div>
                </li>
                <li>
                  <div className="job">
                    <span className="company">DIGITAS</span>
                    <span className="office">front-and</span>
                    <span className="years">2007 - 2010 </span>
                  </div>
                </li>
                <li>
                  <div className="job">
                    <span className="company">ITHINK</span>
                    <span className="office">front-and</span>
                    <span className="years">2010 - 2012 </span>
                  </div>
                </li>
                <li>
                  <div className="job">
                    <span className="company">STARSHINE</span>
                    <span className="office">FULL-STACK</span>
                    <span className="years">2012 - 2015 </span>
                  </div>
                </li>
                <li>
                  <div className="job">
                    <span className="company">NETBIIS</span>
                    <span className="office">FULL-STACK</span>
                    <span className="years">2015 - 2020 </span>
                  </div>
                </li>
                <li className="next">
                  <div className="job">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="icon-message"
                    />
                    <a href="#">
                      {" "}
                      NEXT? <br /> wanna work together? <br /> Contact me now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-right">
            <div className="bg-image"></div>
        </div>
      </div>
    );
  }
}
export default About;
