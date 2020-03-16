import React, { Component } from 'react';
import "./about.scss";

class About extends Component {
    render(){
        
        return(
            <div className="section-about">
                <div className="about-left">
                <div className="about-container">
                 <div className="description-container">
                    
                   <div className="description-text">
                   <div className="since-text">SINCE 1987</div>
                       <h2>I’m lucky because my work is also one of my passions</h2>
                  <p> Currently working as a creative front-end developer at Vdu Web Agency, a small studio based in Turin, Italy. Sometimes I take freelance work.</p>

<p>I specialize in Drupal front-end development but also like trying out other technologies in order to become more flexible.</p>

<p>I enjoy collaborating on interesting projects that I can be proud of.</p>

<p>Another great passion of mine is surfing, not wind-surfing or kite-surfing, just surfing, as in the movie Point Break, but with smaller waves and no robberies.</p> 
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
                             <li>
                                 <div className="job">
                                    <span className="company">NEXT?</span>
                                    <span className="office">wanna work together?</span>
                                    <span className="years">Contact me now</span>
                                 </div>
                             </li>
                         </ul>
                    </div>
                    </div>
                    </div>
                    <div className="about-right">

                    </div>
                
            </div>
        )
    }
}
export default About