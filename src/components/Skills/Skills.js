import React, { Component } from 'react';
import "./skills.scss";

class Skills extends Component {
    render(){
        
        return(
            <div className="section-skills">
                <div className="container-section">
                <div className="back-container">
                    <h2>BACK</h2>
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
                <h2>FRONT</h2>
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